import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./database/index.js";
import router from "./routes/todos.js";

const app = express();
const port = process.env.PORT || 3000;

try {
  const result = await sequelize.sync();
  console.log(result);
} catch (error) {}

app.use(bodyParser.json());
app.use("/todolist", router);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
