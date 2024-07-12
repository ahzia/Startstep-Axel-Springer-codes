import { Task } from './type';
import { addTask, displayTodos, removeTodo } from './todos';
let tasks: Task[] = [];
addTask('Drinking Cofe', tasks);
addTask('Checking Assigments', tasks);
addTask('Checking Assigments 2', tasks);
addTask('Checking Assigments 3', tasks);
addTask('Checking Assigments4', tasks);
addTask('Checking Assigments 5', tasks);
addTask('Checking Assigments 6', tasks);

tasks = removeTodo('Checking Assigments 5', tasks);

displayTodos(tasks);