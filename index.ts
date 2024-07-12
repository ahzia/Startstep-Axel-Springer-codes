import Todo from "./Todo"; //default import

const codingCourseTodo = new Todo();
codingCourseTodo.addTask("Assigment regarding arrays");
codingCourseTodo.addTask("Work on projects");
codingCourseTodo.addTask("Assigment regarding arrays 2");
codingCourseTodo.addTask("Work on projects 2");
codingCourseTodo.displayTodos();
codingCourseTodo.removeTodo("Assigment regarding arrays 2")
console.log("After Removing");

console.log("Shoping Todos:");
const shopingTodo = new Todo();
shopingTodo.addTask("shop grocries");
shopingTodo.displayTodos()
