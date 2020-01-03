import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1578040931658 implements MigrationInterface {
  name = 'migration1578040931658';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "user_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "picture" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "IDX_user_profile_id" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying, "first_name" character varying, "last_name" character varying, "last_logged_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_profile_id" uuid NOT NULL, CONSTRAINT "UQ_user_first_name_last_name" UNIQUE ("first_name", "last_name"), CONSTRAINT "UQ_user_email" UNIQUE ("email"), CONSTRAINT "REL_user_user_profile_id" UNIQUE ("user_profile_id"), CONSTRAINT "IDX_user_id" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TYPE "account_plan_status_enum" AS ENUM('ACTIVE', 'TRIALING', 'CANCELED', 'PAST_DUE')`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TYPE "account_plan_enum" AS ENUM('FREE', 'STARTER', 'PRO', 'ENTERPRISE')`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "plan_status" "account_plan_status_enum" NOT NULL, "plan" "account_plan_enum" NOT NULL, "subscription_id" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, CONSTRAINT "IDX_account_id" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_account_name" ON "account" ("name") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "test_multiple_primary" ("oneId" uuid NOT NULL, "twoId" uuid NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "IDX_test_multiple_primary_oneId_twoId" PRIMARY KEY ("oneId", "twoId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "test_primary" ("primary" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "IDX_test_primary_primary" PRIMARY KEY ("primary"))`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_user_user_profile_id" FOREIGN KEY ("user_profile_id") REFERENCES "user_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "account" ADD CONSTRAINT "FK_account_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "account" DROP CONSTRAINT "FK_account_user_id"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_user_user_profile_id"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "test_primary"`, undefined);
    await queryRunner.query(`DROP TABLE "test_multiple_primary"`, undefined);
    await queryRunner.query(`DROP INDEX "IDX_account_name"`, undefined);
    await queryRunner.query(`DROP TABLE "account"`, undefined);
    await queryRunner.query(`DROP TYPE "account_plan_enum"`, undefined);
    await queryRunner.query(`DROP TYPE "account_plan_status_enum"`, undefined);
    await queryRunner.query(`DROP TABLE "user"`, undefined);
    await queryRunner.query(`DROP TABLE "user_profile"`, undefined);
  }
}
