import { Task } from "../entity/Task";

class TaskService {
    private taskList: Task[] = [];

    public create(text: string): void {
        // Verificar se já existe uma task com o text informado
        const textAlreadyExist = this.taskList.find((task) => task.getText() === text);
        // Envia um Error se ja existir
        if (textAlreadyExist) {
            throw new Error("There is already a task with this text.")
        }

        // Criar o objeto do tipo Task
        const newTask = new Task(text);
        // Adicionar na lista ou database
        this.taskList.push(newTask);
    }

    getAll(): Task[] {
        return this.taskList;
    }
}

export const taskService = new TaskService();
