import { registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

// This File Use by ConfigModule

export default registerAs(
  'database',
  () =>
    ({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 35432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [`${__dirname}/../domain/**/*.entity{.ts,.js}`],
      synchronize: process.env.NODE_ENV === 'development',
      logging: process.env.NODE_ENV === 'development',
      migrations: [`${__dirname}/..//migrations/*{.ts,.js}`],
      migrationsTableName: 'migrations',
    }) as DataSourceOptions,
);
