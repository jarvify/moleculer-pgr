import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575967802381 implements MigrationInterface {
    name = 'migration1575967802381'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_user_account_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "account_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD "user_id" uuid NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_user_user_profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_profile_id" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_user_user_profile_id" FOREIGN KEY ("user_profile_id") REFERENCES "user_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_account_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_account_user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_user_user_profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_profile_id" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_user_user_profile_id" FOREIGN KEY ("user_profile_id") REFERENCES "user_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "account_id" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_user_account_id" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
