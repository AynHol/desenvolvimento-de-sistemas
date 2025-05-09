import { Task } from "../entity/Task";
// import { TaskRepository } from "../repository/TaskRepository";

class TaskService {
    private taskList: Task[] = [];
    // private taskRepository = new TaskRepository();

    public create(text: string): void {
        const textAlreadyExist = this.taskList.find((task) => task.getText() === text);
        if (textAlreadyExist) {
            throw new Error("There is already a task with this text.");
        }
        const newTask = new Task(text);
        // this.taskRepository.save(newTask);
        this.taskList.push(newTask);
    }

    public async getAll() {
        // const task = await this.taskRepository.findAll();
        return this.taskList;
    }

    public getById(id: string): Task | null {
        // const task = this.taskList.filter((task) => task.getId() === id);
        // return task.lenght ? task[0] : null;

        // const task = this.taskList.findIndex((task) => task.getId() === id);
        // return index >= 0 ? this.taskList(index) : null;

        const tasks = this.taskList.find((task) => task.getId() === id);
        return !tasks ? null : tasks;
    }

    public updateCompleted(id: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Task not found.");
        }
        task.setCompleted();
        return task;
    }

    public updateText(id: string, text: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Task not found.");
        }
        task.setText(text);
        return task;
    }

    public deleteTask(id: string) {
        this.taskList = this.taskList.filter((task) => task.getId() !== id);
    }
}

export const taskService = new TaskService();
