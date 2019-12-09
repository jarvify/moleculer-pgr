import { GraphQLSchema, printSchema } from 'graphql';
import { TypescriptGenerator } from 'graphql-binding';
import path from 'path';
import fs from 'fs';
import prettier from 'prettier';

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

async function formatAndSave(input: string, destination: string) {
  const info = await prettier.getFileInfo(destination);

  const options = (await prettier.resolveConfig(destination)) || undefined;
  if (options) {
    options.parser = info.inferredParser as prettier.Options['parser'];
  }

  const output = prettier.format(input, options);
  await new Promise((resolve, reject) => {
    fs.mkdir(path.dirname(destination), { recursive: true }, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
  await new Promise((resolve, reject) => {
    fs.writeFile(destination, output, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

export async function generateSchemaTs(dir: string, schema: GraphQLSchema) {
  const schemaTs = `
    import { buildSchema } from 'graphql';
    import { gql } from 'moleculer-pgr';
    
    const sdl = gql\`
      ${printSchema(schema).replace(/\`/g, '\\`')}
    \`;
    
    export default buildSchema(sdl);
    `;

  const inputSchemaPath = path.join(dir, 'schema.ts');
  const outputBindingPath = path.join(dir, 'binding.ts');

  await formatAndSave(schemaTs, inputSchemaPath);

  const args = {
    schema,
    isDefaultExport: true,
    inputSchemaPath: path.resolve(inputSchemaPath),
    outputBindingPath: path.resolve(outputBindingPath),
  };

  const generatorInstance = new TypescriptGenerator(args);
  const code = generatorInstance.render();

  await formatAndSave(code, outputBindingPath);
}

function convertShapeToGql(object: any): string {
  let query = ``;
  Object.keys(object).forEach(key => {
    const value = object[key];

    if (value === null) {
      query += `${key}\n`;
    } else {
      query += `${key} {\n${convertShapeToGql(value)}}\n`;
    }
  });
  return query;
}

export function shapeToGql(object: any): string {
  return `{\n${convertShapeToGql(object)}}`;
}
