import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1576687460076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    CREATE TRIGGER _500_gql_node_changed
        AFTER INSERT OR UPDATE OR DELETE ON public.user
        FOR EACH ROW
        EXECUTE PROCEDURE public.graphql_subscription('userChanged', 'graphql:user:$1', 'id');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `DROP TRIGGER _500_gql_node_changed ON public.user;`,
    );
  }
}
