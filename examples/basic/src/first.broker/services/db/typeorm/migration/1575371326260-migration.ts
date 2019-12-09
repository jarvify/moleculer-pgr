import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1575371326260 implements MigrationInterface {
    name = 'migration1575371326260'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying, "first_name" character varying, "last_name" character varying, "last_logged_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "account_id" uuid, CONSTRAINT "UQ_user_email" UNIQUE ("email"), CONSTRAINT "REL_user_account_id" UNIQUE ("account_id"), CONSTRAINT "IDX_user_id" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TYPE "account_plan_status_enum" AS ENUM('ACTIVE', 'TRIALING', 'CANCELED', 'PAST_DUE')`, undefined);
        await queryRunner.query(`CREATE TYPE "account_plan_enum" AS ENUM('FREE', 'STARTER', 'PRO', 'ENTERPRISE')`, undefined);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "plan_status" "account_plan_status_enum" NOT NULL, "plan" "account_plan_enum" NOT NULL, "subscription_id" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "REL_account_user_id" UNIQUE ("user_id"), CONSTRAINT "IDX_account_id" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_account_name" ON "account" ("name") `, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_user_account_id" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_account_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_account_user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_user_account_id"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_account_name"`, undefined);
        await queryRunner.query(`DROP TABLE "account"`, undefined);
        await queryRunner.query(`DROP TYPE "account_plan_enum"`, undefined);
        await queryRunner.query(`DROP TYPE "account_plan_status_enum"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
