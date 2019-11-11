import { Sequelize } from "sequelize-typescript";

require("dotenv").config();
export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  database: process.env.DATABASE,
  models: [__dirname + "/models/"],
  logging: false,
  define: {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
});
