import { Task } from "@prisma/client";
import { prisma } from "../prisma/client";

class TaskService {
    public async create(text: string, userId: string): Promise<void> {
        const task: Task = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            userId,
            createdAt: new Date(),
            updatedAr: new Date(),
        };
        await prisma.task.create({ data: task });
    }

    public async getAll(userId: string): Promise<Task[]> {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: "desc" },
            where: { userId },
            include: {
                TaskTag: {
                    include: {
                        tag: true,
                    },
                },
            },
        });

        const tasksMap = tasks.map(
            (task) =>
                ({
                    id: task.id,
                    text: task.text,
                    completed: task.completed,
                    userId: task.userId,
                    tags: task.TaskTag.map((relation) => ({ tag: relation.tag.name, id: relation.tag.id })),
                } as any)
        );
        return tasksMap;
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
