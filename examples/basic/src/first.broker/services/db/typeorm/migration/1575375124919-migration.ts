import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575375124919 implements MigrationInterface {
    name = 'migration1575375124919'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_user_first_name_last_name" UNIQUE ("first_name", "last_name")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_user_first_name_last_name"`, undefined);
    }

}
