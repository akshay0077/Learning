import { Router } from "express";
import {getTodos,createTodo} from "./controllers/Todo.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("LET'S build a CRUD API's")
})

router.get("/todos", getTodos);

router.post("/todos", createTodo);



export default router;