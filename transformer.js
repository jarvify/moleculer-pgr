"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts = __importStar(require("typescript"));
const path = __importStar(require("path"));
function transformer(program) {
    return (context) => (file) => visitNodeAndChildren(file, program, context);
}
exports.default = transformer;
function visitNodeAndChildren(node, program, context) {
    return ts.visitEachChild(visitNode(node, program), childNode => visitNodeAndChildren(childNode, program, context), context);
}
function mergeUnions(shapes, typeChecker) {
    const allKeys = shapes.reduce((acc, o) => {
        if ('elements' in o) {
            // @ts-ignore
            return [...acc, ...o.elements[0].properties];
        }
        if (!('properties' in o)) {
            return acc;
        }
        return [...acc, ...o.properties];
    }, []);
    const byName = new Map();
    allKeys.forEach(prop => {
        if (!prop.name) {
            return;
        }
        // @ts-ignore
        const name = prop.name.text;
        let item = byName.get(name);
        if (!item) {
            byName.set(name, []);
            item = byName.get(name);
        }
        if (item) {
            item.push(prop);
        }
    });
    const uniqueKeys = Array.from(byName.keys());
    const merged = ts.createObjectLiteral(uniqueKeys.map(key => {
        const properties = byName.get(key) || [];
        const shapeProperties = properties.filter(p => {
            // @ts-ignore
            const initializer = p.initializer;
            if (initializer.properties) {
                return true;
            }
            // @ts-ignore
            return (initializer.elements &&
                // @ts-ignore
                initializer.elements.every(node => !!node.properties));
        });
        if (shapeProperties.length === 0) {
            return ts.createPropertyAssignment(key, ts.createNull());
        }
        if (shapeProperties.length === 1) {
            return shapeProperties[0];
        }
        // @ts-ignore
        const nodes = shapeProperties.map(v => v.initializer);
        return ts.createPropertyAssignment(key, mergeUnions(nodes, typeChecker));
    }));
    return merged;
}
function handleUnionOrIntersectionType(type, typeChecker) {
    const possibleTypes = type.types;
    if (possibleTypes.some(t => 'types' in t)) {
        return mergeUnions(possibleTypes.map(t => walkShape(t, typeChecker)), typeChecker);
    }
    const shapeTypes = possibleTypes.filter(t => t.symbol);
    if (shapeTypes.length === 0) {
        return ts.createNull();
    }
    if (shapeTypes.length === 1) {
        return walkShape(shapeTypes[0], typeChecker);
    }
    return mergeUnions(shapeTypes.map(t => walkShape(t, typeChecker)), typeChecker);
}
function walkShape(type, typeChecker) {
    if ('types' in type) {
        return handleUnionOrIntersectionType(type, typeChecker);
    }
    if (!type.symbol || !type.symbol.members) {
        return ts.createNull();
    }
    // TODO: find better way to not walk through native types
    if (['Function', 'Date'].includes(type.symbol.name)) {
        return ts.createNull();
    }
    if (type.symbol.name === 'Array') {
        return ts.createArrayLiteral([
            // @ts-ignore
            walkShape(type.typeArguments[0], typeChecker),
        ]);
    }
    const values = typeChecker.getAugmentedPropertiesOfType(type);
    return ts.createObjectLiteral(values.map((val) => {
        let valueType = typeChecker.getTypeAtLocation(val.valueDeclaration);
        return ts.createPropertyAssignment(val.name, walkShape(valueType, typeChecker));
    }));
}
function visitNode(node, program) {
    const typeChecker = program.getTypeChecker();
    if (!isShapeCallExpression(node, typeChecker)) {
        return node;
    }
    if (!node.typeArguments) {
        return ts.createArrayLiteral([]);
    }
    const type = typeChecker.getTypeFromTypeNode(node.typeArguments[0]);
    const shape = walkShape(type, typeChecker);
    if (!('properties' in shape)) {
        // we've got no properties, let's return {} instead of 'null'
        return ts.createObjectLiteral([]);
    }
    return shape;
}
const indexTs = path.join(__dirname, 'dist', 'index.d.ts');
function isShapeCallExpression(node, typeChecker) {
    if (node.kind !== ts.SyntaxKind.CallExpression) {
        return false;
    }
    const signature = typeChecker.getResolvedSignature(node);
    if (typeof signature === 'undefined') {
        return false;
    }
    const { declaration } = signature;
    return (!!declaration &&
        path.join(declaration.getSourceFile().fileName) === indexTs &&
        // @ts-ignore
        !!declaration['name'] &&
        // @ts-ignore
        declaration['name'].getText() === 'shape');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFDakMsMkNBQTZCO0FBRTdCLFNBQXdCLFdBQVcsQ0FDakMsT0FBbUI7SUFFbkIsT0FBTyxDQUFDLE9BQWlDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFLENBQ3BFLG9CQUFvQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUxELDhCQUtDO0FBWUQsU0FBUyxvQkFBb0IsQ0FDM0IsSUFBYSxFQUNiLE9BQW1CLEVBQ25CLE9BQWlDO0lBRWpDLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FDdEIsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFDeEIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUM5RCxPQUFPLENBQ1IsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FDbEIsTUFJRyxFQUNILFdBQTJCO0lBRTNCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ25CLGFBQWE7WUFDYixPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxFQUFF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