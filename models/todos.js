import { Sequelize } from "sequelize";
import { sequelize } from "../database/index.js";

export const toDoList = sequelize.define(
  //
  "toDo",
  {
    // SETTING UP COLUMNS
    // - PRIMARY KEY
    // - COLUMN TYPES
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tasks_ToDo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  // RENAMING THE AUTO GENERATED COLUMNS
  {
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
