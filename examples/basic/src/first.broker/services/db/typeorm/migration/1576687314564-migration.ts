import { MigrationInterface, QueryRunner } from 'typeorm';

/*
select pg_notify(
  'postgraphile:create',
  json_build_object(
    '__node__', json_build_array(TG_TABLE_NAME, NEW.id)
  )::text
);

select pg_notify(
  'postgraphile:update',
  json_build_object(
    '__node__', json_build_array(TG_TABLE_NAME, NEW.id)
  )::text
);

select pg_notify(
  'postgraphile:delete',
  json_build_object(
    '__node__', json_build_array(TG_TABLE_NAME, OLD.id)
  )::text
);

*/

export class migration1576687314564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    /*
    await queryRunner.query(
      `CREATE FUNCTION public.graphql_subscription() returns trigger as $$
            declare
              v_record record;
            begin
            -- On UPDATE sometimes topic may be changed for NEW record,
            -- so we need notify to both topics NEW and OLD.
              IF TG_OP = 'INSERT' THEN
                perform pg_notify(
                  'postgraphile:create',
                  json_build_object(
                    '__node__', json_build_array(TG_TABLE_NAME, NEW.id)
                  )::text
                );
                v_record = NEW;
              END IF;

              IF TG_OP = 'UPDATE' THEN
                perform pg_notify(
                  'postgraphile:update',
                  json_build_object(
                    '__node__', json_build_array(TG_TABLE_NAME, NEW.id)
                  )::text
                );
                v_record = NEW;
              END IF;

              IF TG_OP = 'DELETE' THEN
                perform pg_notify(
                  'postgraphile:delete',
                  json_build_object(
                    '__node__', json_build_array(TG_TABLE_NAME, OLD.id)
                  )::text
                );
                v_record = OLD;
              END IF;
              return v_record;
            end;
            
        $$ language plpgsql volatile set search_path from current;`,
    );
    */
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    /*
    await queryRunner.query(`DROP FUNCTION public.graphql_subscription()`);
    */
  }
}
