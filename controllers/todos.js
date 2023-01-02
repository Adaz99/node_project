import { readFileSync, writeFileSync } from "fs";
import { toDoList } from "../models/todos.js";
import { Op } from "sequelize";

export const getTasks_ToDo = async (req, res) => {
  const { prio, tasks_ToDo, created_by } = req.query;
  const query = { where: {},
order:[["prio", "ASC"]] };
  if (prio) {
    query.where.prio = { [Op.eq]: prio };
  }
  if (tasks_ToDo) {
    query.where.tasks_ToDo = { [Op.like]: `%${tasks_ToDo}%` };
  }
  if (created_by) {
    query.where.created_by = { [Op.like]: `%${created_by}%` };
  }
  try {
    const toDo = await toDoList.findAll(query);
    res.send(toDo);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const addTasks_ToDo = async (req, res) => {
  try {
    const toDo = await toDoList.create(req.body);
    res.status(201).send({ data: `Task Id: ${toDo.id} created` });
  } catch (error) {
    res.status(403).send(error.message);
  }
};

export const deleteTasks_ToDoById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const toDo = await toDoList.destroy({
      where: {
        id: id,
      },
    });
    if (!toDo) {
      throw new Error("toDoList not found");
    }

    res.status(204);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const getTasks_ToDoById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const toDo = await toDoList.findByPk(id);
    // ! student = student === null
    if (!toDo) {
      throw new Error("Student not found");
    }
    res.send(toDo);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const updateTasks_ToDoById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const toDo = await toDoList.update(req.body, {
      where: {
        id: id,
      },
    });
    if (toDo[0] === 0) throw new Error("toDo not found");
    res.send("toDo updated");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
