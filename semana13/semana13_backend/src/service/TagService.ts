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
}

export const tagService = new TagService();
