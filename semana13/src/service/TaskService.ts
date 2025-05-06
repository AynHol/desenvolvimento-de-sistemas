import { Task } from "../entity/Task";

class TaskService {
    private taskList: Task[] = [];

    public create(text: string): void {
        // Verificar se já existe uma task com o text informado
        const textAlreadyExist = this.taskList.find((task) => task.getText() === text);
        // Envia um Error se ja existir
        if (textAlreadyExist) {
            throw new Error("There is already a task with this text.");
        }

        // Criar o objeto do tipo Task
        const newTask = new Task(text);
        // Adicionar na lista ou database
        this.taskList.push(newTask);
    }

    public getAll(): Task[] {
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
}

export const taskService = new TaskService();
