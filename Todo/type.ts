export enum TaskStatus {
    ToDo,  //0
    Inprogress, //1
    Completed, //2
}
export type Task = {
    id: number,
    name: string,
    status: TaskStatus,
}
