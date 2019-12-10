import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575975063973 implements MigrationInterface {
    name = 'migration1575975063973'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "test_multiple_primary" DROP CONSTRAINT "IDX_test_multiple_primary_oneId_twoId_primary"`, undefined);
        await queryRunner.query(`ALTER TABLE "test_multiple_primary" ADD CONSTRAINT "IDX_test_multiple_primary_oneId_twoId" PRIMARY KEY ("oneId", "twoId")`, undefined);
        await queryRunner.query(`ALTER TABLE "test_multiple_primary" DROP COLUMN "primary"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "test_multiple_primary" ADD "primary" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "test_multiple_primary" DROP CONSTRAINT "IDX_test_multiple_primary_oneId_twoId"`, undefined);
        await queryRunner.query(`ALTER TABLE "test_multiple_primary" ADD CONSTRAINT "IDX_test_multiple_primary_oneId_twoId_primary" PRIMARY KEY ("oneId", "twoId", "primary")`, undefined);
    }

}
