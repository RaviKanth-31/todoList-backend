const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateTodo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateTodo);

router.post("/delete", deleteToDo);

module.exports = router;