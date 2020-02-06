import { MigrationInterface, QueryRunner } from 'typeorm';
import { createSeedBroker } from '../../client';

export class migration1575297199636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const broker = await createSeedBroker();
    // await await broker.call('db.user', { id: 'a' });
    await broker.stop();
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
