import { Task } from "@prisma/client";
import { prisma } from "../prisma/client";

export class TaskRepository {
    async save(task: Task) {
        await prisma.task.create({ data: task });
    }

    async findAll() {
        return prisma.task.findMany();
    }
}
