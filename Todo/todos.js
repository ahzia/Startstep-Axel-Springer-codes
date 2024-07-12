"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayTodos = exports.removeTodo = exports.addTask = void 0;
const type_1 = require("./type");
const addTask = (name, tasks) => {
    const id = Math.floor(Math.random() * 1000000000);
    tasks.push({
        name, //name : name
        id, // id: id
        status: type_1.TaskStatus.ToDo
    });
};
exports.addTask = addTask;
const displayTodos = (tasks) => {
    tasks.forEach((task) => {
        // console.log(`${task.id}: ${task.name} - ${TaskStatus[task.status]}`)
        const { id, name, status } = task; //destructuring an object
        console.log(`${id}: ${name} - ${type_1.TaskStatus[status]}`);
    });
};
exports.displayTodos = displayTodos;
const removeTodo = (name, tasks) => (tasks.filter((task) => (task.name !== name)));
exports.removeTodo = removeTodo;
