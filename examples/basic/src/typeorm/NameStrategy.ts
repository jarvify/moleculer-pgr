import { NamingStrategyInterface, DefaultNamingStrategy, Table } from 'typeorm';

function getTableName(tableOrName: Table | string) {
  const tableName = tableOrName;
  return tableName;
}

export class CustomNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  foreignKeyName(tableOrName: string | Table, columnNames: string[]) {
    const tableName = getTableName(tableOrName);

    const clonedColumnNames = [...columnNames];
    clonedColumnNames.sort();

    let fkName = `FK_${tableName}`;
    clonedColumnNames.forEach(one => {
      fkName += `_${one}`;
    });

    return fkName;
  }

  indexName(
    tableOrName: Table | string,
    columnNames: string[],
    where?: string,
  ): string {
    const tableName = getTableName(tableOrName);

    const clonedColumnNames = [...columnNames];
    clonedColumnNames.sort();

    let idxName = `IDX_${tableName}`;
    columnNames.forEach(one => {
      idxName += `_${one}`;
    });

    if (where) idxName += `_${where}`;

    return idxName;
  }

  relationConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
    where?: string,
  ): string {
    const tableName = getTableName(tableOrName);

    const clonedColumnNames = [...columnNames];
    clonedColumnNames.sort();

    let relName = `REL_${tableName}`;
    columnNames.forEach(one => {
      relName += `_${one}`;
    });

    if (where) relName += `_${where}`;

    return relName;
  }

  primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
    const tableName = getTableName(tableOrName);

    const clonedColumnNames = [...columnNames];
    clonedColumnNames.sort();

    let pkName = `IDX_${tableName}`;
    columnNames.forEach(one => {
      pkName += `_${one}`;
    });

    return pkName;
  }

  uniqueConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
  ): string {
    const tableName = getTableName(tableOrName);

    const clonedColumnNames = [...columnNames];
    clonedColumnNames.sort();

    let uqName = `UQ_${tableName}`;

    columnNames.forEach(one => {
      uqName += `_${one}`;
    });

    return uqName;
  }
}
