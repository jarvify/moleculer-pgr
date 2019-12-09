import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1575373027608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
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
            create function user_search(search text)
                returns setof public.user as $$
                    select *
                    from public.user
                    where
                        id IS NULL
                $$ language sql stable;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
            DROP FUNCTION user_custom_mutation(team_id integer);
        `);
    await queryRunner.query(`
            DROP FUNCTION function user_search(search text);
        `);
  }
}
