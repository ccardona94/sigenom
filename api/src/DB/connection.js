import { Sequelize } from "sequelize";
import { vars } from "../config";
import { setUpModels } from "../Models";

// const URI = `mysql://${vars.dbUser}:${vars.dbPassword}@${vars.dbHost}:${vars.dbPort}/${vars.dbName}`;

export const db = new Sequelize(vars.dbName, vars.dbUser, vars.dbPassword, {
  host: vars.dbHost,
  dialect: "postgres",
  logging: false,
});

setUpModels(db);

export const models = db.models;
