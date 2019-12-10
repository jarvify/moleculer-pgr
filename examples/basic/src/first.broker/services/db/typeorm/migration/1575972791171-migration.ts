import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575972791171 implements MigrationInterface {
    name = 'migration1575972791171'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "test_primary" ("primary" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "IDX_test_primary_primary" PRIMARY KEY ("primary"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "test_primary"`, undefined);
    }

}
