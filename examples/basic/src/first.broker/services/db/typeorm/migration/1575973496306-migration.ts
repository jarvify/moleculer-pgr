import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575973496306 implements MigrationInterface {
    name = 'migration1575973496306'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "test_multiple_primary" ("oneId" uuid NOT NULL, "twoId" uuid NOT NULL, "primary" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "IDX_test_multiple_primary_oneId_twoId_primary" PRIMARY KEY ("oneId", "twoId", "primary"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "test_multiple_primary"`, undefined);
    }

}
