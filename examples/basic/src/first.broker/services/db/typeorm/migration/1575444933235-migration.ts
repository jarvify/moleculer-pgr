import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575444933235 implements MigrationInterface {
    name = 'migration1575444933235'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_account_user_id"`, undefined);
        await queryRunner.query(`CREATE TABLE "user_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "picture" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "IDX_user_profile_id" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "REL_account_user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_profile_id" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_user_user_profile_id" UNIQUE ("user_profile_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_user_account_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_user_account_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_user_account_id" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_user_user_profile_id" FOREIGN KEY ("user_profile_id") REFERENCES "user_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_user_user_profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_user_account_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_user_account_id" UNIQUE ("account_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_user_account_id" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_user_user_profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_profile_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD "user_id" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "REL_account_user_id" UNIQUE ("user_id")`, undefined);
        await queryRunner.query(`DROP TABLE "user_profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_account_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
