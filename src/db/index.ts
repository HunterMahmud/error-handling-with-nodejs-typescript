import { DataSource } from "typeorm";
import { config } from './../core/config/index';

export const appDataSource = new DataSource({
  type: "mysql",
  username: config.DB_USER,
  password: config.DB_PASS,
  port: config.DB_PORT,
  database: config.DB_NAME,
  host: config.DB_HOST,
  synchronize: true,
  entities: [__dirname + "/entities/*{.ts,.js}"],
  logging: false,
});
