import { Task as PTASK } from "@prisma/client";
import { prisma } from "../prisma/client";

class TaskService {

    public async create(text: string): Promise<void> {
        const task: PTASK = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
            createdAt: new Date(),
            updatedAr: new Date(),
        };
        await prisma.task.create({ data: task });
    }

    public async getAll(): Promise<PTASK[]> {
        return await prisma.task.findMany();
    }

    public async updateCompleted(id: string) {
        const task = await prisma.task.findUnique({ where: { id } });
        if (task == null) {
            throw new Error("Task not found.");
        }

        const taskUpdate = {
            completed: !task.completed,
            updatedAt: new Date(),
        };

        return await prisma.task.update({
            where: { id },
            data: taskUpdate,
        });
    }

    public async deleteTask(id: string) {
        return await prisma.task.delete({ where: { id } });
    }
}

export const taskService = new TaskService();
