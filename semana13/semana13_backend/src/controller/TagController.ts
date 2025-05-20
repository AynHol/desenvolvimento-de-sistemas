import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { tagService } from "../service/TagService";

export async function tagController(app: FastifyInstance) {
    app.addHook("onRequest", app.authenticate);

    app.post("/tag", async (request: FastifyRequest, reply: FastifyReply) => {
        const { name } = request.body as { name: string };

        try {
            await tagService.create(name);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ error: error.messsage });
        }
    });

    app.post("/tag/relation", async (request: FastifyRequest, reply: FastifyReply) => {
        const { taskId, tagId } = request.body as { taskId: string; tagId: string };

        try {
            await tagService.relation(taskId, tagId);
            return reply.code(200).send();
        } catch (error: any) {
            return reply.code(400).send({  error: error.messsage });
        }
    });
}
