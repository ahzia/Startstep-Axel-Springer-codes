import { Task, TaskStatus } from "./Todo/type";

class Todo {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask = (name: string): void => {
        const id = Math.floor(Math.random() * 1000000000);
        this.tasks.push(
            {
                name, //name : name
                id, // id: id
                status: TaskStatus.ToDo
            }
        )
    }


    displayTodos = (): void => {
        this.tasks.forEach((task) => {
            // console.log(`${task.id}: ${task.name} - ${TaskStatus[task.status]}`)
            const { id, name, status } = task; //destructuring an object
            console.log(`${id}: ${name} - ${TaskStatus[status]}`)

        })
    }

    removeTodo = (name: string): void => {
        this.tasks = this.tasks.filter((task) => (task.name !== name))
        // this.displayTodos()
    }

}

export default Todo;