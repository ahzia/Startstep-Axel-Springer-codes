import { TaskStatus, Task } from './type';
export const addTask = (name: string, tasks: Task[]): void => {
    const id = Math.floor(Math.random() * 1000000000);
    tasks.push(
        {
            name, //name : name
            id, // id: id
            status: TaskStatus.ToDo
        }
    )
}


const displayTodos = (tasks: Task[]): void => {
    tasks.forEach((task) => {
        // console.log(`${task.id}: ${task.name} - ${TaskStatus[task.status]}`)
        const { id, name, status } = task; //destructuring an object
        console.log(`${id}: ${name} - ${TaskStatus[status]}`)

    })
}

const removeTodo = (name: string, tasks: Task[]): Task[] => (tasks.filter((task) => (task.name !== name)))

export {
    removeTodo,
    displayTodos,
}