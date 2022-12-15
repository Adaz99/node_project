import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("students_db", "root","qazplm12345", {
    host: "localhost",
    dialect: "mysql",
});
