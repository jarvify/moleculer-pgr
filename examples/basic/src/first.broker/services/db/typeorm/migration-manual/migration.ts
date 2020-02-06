import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // FUNCTIONS
    await queryRunner.query(
      `DROP FUNCTION IF EXISTS postgraphile_node_change() CASCADE;`,
    );

    await queryRunner.query(
      `CREATE FUNCTION postgraphile_node_change() returns trigger as $$
        declare
        v_name text = TG_ARGV[0];
        v_record record;
        begin
        -- On UPDATE sometimes topic may be changed for NEW record,
        -- so we need notify to both topics NEW and OLD.
        IF (TG_OP = 'INSERT') THEN
            perform pg_notify(
            'postgraphile:node:change',
            json_build_object(
                'mutation', 'CREATE',
                'name', v_name,
                'id', NEW.id 
            )::text
            );
            v_record = NEW;
        ELSIF (TG_OP = 'UPDATE') THEN
            perform pg_notify(
            'postgraphile:node:change',
            json_build_object(
                'mutation', 'UPDATE',
                'name', v_name,
                'id', NEW.id 
            )::text
            );
            v_record = NEW;
        ELSIF (TG_OP = 'DELETE') THEN
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

    await queryRunner.query(`
      DROP FUNCTION IF EXISTS user_custom_mutation(team_id integer) CASCADE;
    `);

    await queryRunner.query(`
      CREATE FUNCTION user_custom_mutation(team_id integer)
      RETURNS public.user
      AS $$
      UPDATE public.user
          SET updated_at = now()
          WHERE id IS NULL
          RETURNING *;
      $$ LANGUAGE sql VOLATILE STRICT SECURITY DEFINER;
    `);

    await queryRunner.query(`
      DROP FUNCTION IF EXISTS user_search(search text) CASCADE;
    `);

    await queryRunner.query(`
      CREATE FUNCTION user_search(search text)
        returns setof public.user as $$
            select *
            from public.user
            where
                id IS NULL
        $$ language sql stable;
      `);

    // TRIGGERS
    await queryRunner.query(
      `DROP TRIGGER IF EXISTS postgraphile_node_change ON public.user CASCADE;`,
    );

    await queryRunner.query(`
      CREATE TRIGGER postgraphile_node_change
      AFTER INSERT OR UPDATE OR DELETE ON public.user
        FOR EACH ROW EXECUTE PROCEDURE postgraphile_node_change('user');
    `);

    await queryRunner.query(
      `DROP TRIGGER IF EXISTS postgraphile_node_change ON public.user_profile CASCADE;`,
    );

    await queryRunner.query(`
      CREATE TRIGGER postgraphile_node_change
      AFTER INSERT OR UPDATE OR DELETE ON public.user_profile
        FOR EACH ROW EXECUTE PROCEDURE postgraphile_node_change('userProfile');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // @only up, dont define this
  }
}

// always run this migration
Object.defineProperty(Migration, 'name', { value: `migration${Date.now()}` });
