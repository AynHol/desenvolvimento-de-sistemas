import { Tag } from "@prisma/client";
import { prisma } from "../prisma/client";

class TagService {
    public async create(name: string): Promise<void> {
        const tagExist = await prisma.tag.findUnique({ where: { name } });
        if (tagExist) {
            throw new Error("Tag Already Exists!");
        }

        const tag: Tag = {
            id: crypto.randomUUID(),
            name,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await prisma.tag.create({ data: tag });
    }

    public async relation(taskId: string, tagId: string) {
        const task = await prisma.task.findUnique({ where: { id: taskId } });
        if (!task) {
            throw new Error("Informed Task Does Not Exist");
        }
        const tag = await prisma.task.findUnique({ where: { id: tagId } });
        if (!tag) {
            throw new Error("Informed Tag Does Not Exist");
        }

        await prisma.taskTag.create({ data: { taskId, tagId } });
    }
}

export const tagService = new TagService();
