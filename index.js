"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = __importDefault(require("./Todo")); //default import
const codingCourseTodo = new Todo_1.default();
codingCourseTodo.addTask("Assigment regarding arrays");
codingCourseTodo.addTask("Work on projects");
codingCourseTodo.addTask("Assigment regarding arrays 2");
codingCourseTodo.addTask("Work on projects 2");
codingCourseTodo.removeTodo("Assigment regarding arrays 2");
console.log("After Removing");
console.log("Shoping Todos:");
const shopingTodo = new Todo_1.default();
shopingTodo.addTask("shop grocries");
shopingTodo.displayTodos();
