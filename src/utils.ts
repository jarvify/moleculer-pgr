import { SchemaBuilder, Options as BuilderOptions } from 'postgraphile';
import { generateMixin } from './generator';

export type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function gql(...args: TemplateStringsArray[]): string {
  var tagArgs = args;
  return tagArgs[0].reduce(function(
    accumulator: string,
    string: string,
    index: number,
  ) {
    accumulator += string;
    if (index + 1 in tagArgs) accumulator += tagArgs[index + 1];
    return accumulator;
  },
  '');
}

interface Options {
  outputDir: string;
}

export function createGenerateMixinPlugin(
  options: Options,
  callback: (err?: Error) => void,
) {
  return function(
    builder: SchemaBuilder,
    builderOptions: BuilderOptions,
  ): void {
    MyBuilderPlugin(builder, builderOptions, options, callback!);
  };
}

function MyBuilderPlugin(
  builder: SchemaBuilder,
  builderOptions: BuilderOptions,
  options: Options,
  callback: Function,
): void {
  const outputDir = options.outputDir;

  const operations: any = {};
  const objectTypes: any = {};

  builder.hook('GraphQLObjectType', (spec, { extend }, { scope }) => {
    objectTypes[spec.name] = {
      fields: {},
      scope,
    };

    return spec;
  });

  builder.hook(
    'GraphQLObjectType:fields',
    (spec: any, { extend }, { scope }) => {
      if (scope.isRootQuery) {
        Object.keys(spec).forEach(operationName => {
          if (operationName === 'query') {
            return spec;
          }

          let curType = spec[operationName].type;
          while (curType && curType.ofType) {
            curType = curType.ofType;
          }

          const returnTypeName = curType.name;

          if (returnTypeName) {
            operations[operationName] = {
              name: operationName,
              isRootQuery: true,
              returnTypeName,
            };
          }
        });

        return spec;
      }

      if (scope.isRootMutation) {
        Object.keys(spec).forEach(operationName => {
          let curType = spec[operationName].type;
          while (curType && curType.ofType) {
            curType = curType.ofType;
          }

          const returnTypeName = curType.name;

          if (returnTypeName) {
            operations[operationName] = {
              name: operationName,
              isRootMutation: true,
              returnTypeName,
            };
          }
        });

        return spec;
      }

      return spec;
    },
  );

  builder.hook(
    'GraphQLObjectType:fields:field',
    (field: any, { extend }: any, { scope, Self }: any) => {
      let curType = field.type;
      while (curType && curType.ofType) {
        curType = curType.ofType;
      }

      const returnTypeName = curType.name;

      objectTypes[Self.name].fields[scope.fieldName] = {
        scope,
        returnTypeName,
        field,
      };

      return field;
    },
  );

  builder.hook('finalize', schema => {
    Object.keys(operations).map(operationName => {
      const op = operations[operationName];
    });

    setTimeout(async () => {
      try {
        await generateMixin({
          outputDir,
          schema,
          operations,
          objectTypes,
        });

        callback();
      } catch (err) {
        callback(err);
      }
    }, 0);

    return schema;
  });
}
