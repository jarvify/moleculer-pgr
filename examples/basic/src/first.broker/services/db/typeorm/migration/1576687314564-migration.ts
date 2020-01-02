import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1576687314564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `DROP FUNCTION IF EXISTS public.postgraphile_node_change() CASCADE;`,
    );

    await queryRunner.query(
      `CREATE FUNCTION public.postgraphile_node_change() returns trigger as $$
            declare
              v_name text = TG_ARGV[0];
              v_record record;
            begin
            -- On UPDATE sometimes topic may be changed for NEW record,
            -- so we need notify to both topics NEW and OLD.
              IF TG_OP = 'INSERT' THEN
                perform pg_notify(
                  'postgraphile:node:change',
                  json_build_object(
                    'mutation', 'CREATE',
                    'name', v_name,
                    'id', NEW.id 
                  )::text
                );
                v_record = NEW;
              END IF;

              IF TG_OP = 'UPDATE' THEN
                perform pg_notify(
                  'postgraphile:node:change',
                  json_build_object(
                    'mutation', 'UPDATE',
                    'name', v_name,
                    'id', NEW.id 
                  )::text
                );
                v_record = NEW;
              END IF;

              IF TG_OP = 'DELETE' THEN
                perform pg_notify(
                  'postgraphile:node:change',
                  json_build_object(
                    'mutation', 'DELETE',
                    'name', v_name,
                    'id', OLD.id 
                  )::text
                );
                v_record = OLD;
              END IF;
              return v_record;
            end;
            
        $$ language plpgsql volatile set search_path from current;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP FUNCTION public.postgraphile_node_change()`);
  }
}
