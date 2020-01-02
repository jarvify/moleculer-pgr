import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1576687460076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    CREATE TRIGGER _500_postgraphile_node_change
      AFTER INSERT OR UPDATE OR DELETE ON public.user
        FOR EACH ROW
        EXECUTE PROCEDURE public.postgraphile_node_change('user');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `DROP TRIGGER _500_postgraphile_node_change ON public.user;`,
    );
  }
}
