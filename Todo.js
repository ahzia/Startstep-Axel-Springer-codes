"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./Todo/type");
class Todo {
    constructor() {
        this.addTask = (name) => {
            const id = Math.floor(Math.random() * 1000000000);
            this.tasks.push({
                name, //name : name
                id, // id: id
                status: type_1.TaskStatus.ToDo
            });
        };
        this.displayTodos = () => {
            this.tasks.forEach((task) => {
                // console.log(`${task.id}: ${task.name} - ${TaskStatus[task.status]}`)
                const { id, name, status } = task; //destructuring an object
                console.log(`${id}: ${name} - ${type_1.TaskStatus[status]}`);
            });
        };
        this.removeTodo = (name) => {
            this.tasks = this.tasks.filter((task) => (task.name !== name));
            this.displayTodos();
        };
        this.tasks = [];
    }
}
exports.default = Todo;
