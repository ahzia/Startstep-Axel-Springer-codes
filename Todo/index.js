"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("./todos");
let tasks = [];
(0, todos_1.addTask)('Drinking Cofe', tasks);
(0, todos_1.addTask)('Checking Assigments', tasks);
(0, todos_1.addTask)('Checking Assigments 2', tasks);
(0, todos_1.addTask)('Checking Assigments 3', tasks);
(0, todos_1.addTask)('Checking Assigments4', tasks);
(0, todos_1.addTask)('Checking Assigments 5', tasks);
(0, todos_1.addTask)('Checking Assigments 6', tasks);
tasks = (0, todos_1.removeTodo)('Checking Assigments 5', tasks);
(0, todos_1.displayTodos)(tasks);
