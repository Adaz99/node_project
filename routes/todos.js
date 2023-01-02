import { Router } from "express";

import {
  getTasks_ToDo,
  addTasks_ToDo,
  deleteTasks_ToDoById,
  getTasks_ToDoById,
  updateTasks_ToDoById,
} from "../controllers/todos.js";

const router = Router();

router.get("/", getTasks_ToDo);

router.get("/:id", getTasks_ToDoById);

router.delete("/:id", deleteTasks_ToDoById);

router.put("/:id", updateTasks_ToDoById);

router.post("/", addTasks_ToDo);

export default router;
