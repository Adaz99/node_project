import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todolist_db", "root", "qazplm12345", {
  host: "localhost",
  dialect: "mysql",
});
