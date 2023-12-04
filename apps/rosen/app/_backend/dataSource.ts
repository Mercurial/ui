import { DataSource } from '@rosen-bridge/extended-typeorm';
import {
  ObservationEntity,
  migrations as observationExtractorMigrations,
} from '@rosen-bridge/observation-extractor';
import {
  BlockEntity,
  migrations as scannerMigrations,
} from '@rosen-bridge/scanner';

const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  ssl: process.env.POSTGRES_USE_SSL === 'true',
  synchronize: false,
  logging: false,
  entities: [BlockEntity, ObservationEntity],
  migrations: [
    ...observationExtractorMigrations.postgres,
    ...scannerMigrations.postgres,
  ],
});

export default dataSource;
