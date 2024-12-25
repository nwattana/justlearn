import { MigrationInterface, QueryRunner } from "typeorm";

export class INIT1735120966496 implements MigrationInterface {
    name = 'INIT1735120966496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "price" money NOT NULL DEFAULT '0', CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Product"`);
    }

}
