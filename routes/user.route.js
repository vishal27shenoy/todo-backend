const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const todoController = require("../controller/todo.contrller")
router.route("/auth").post(userController.Register).put(userController.Login);
router.route("/:id").post(todoController.addTodo).patch(todoController.deleteTodo).put(todoController.editTodo).get(todoController.getTodos);
module.exports = router;