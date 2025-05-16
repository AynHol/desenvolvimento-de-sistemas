import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";
import { geralTaskSchema, taskSchema } from "../config/schema/task.schema";
import { User } from "@prisma/client";

export async function taskController(app: FastifyInstance) {
    app.addHook("onRequest", app.authenticate);

    app.post("/task", { schema: taskSchema }, async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as { text: string };
        const { id } = request.user as User;

        try {
            await taskService.create(body.text, id);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ error: error.messsage });
        }
    });

    app.get("/task", { schema: geralTaskSchema }, async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.user as User;
        const list = await taskService.getAll(id);
        return reply.code(200).send(list);
    });

    app.patch("/task/:id/completed", { schema: geralTaskSchema }, async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        try {
            const task = await taskService.updateCompleted(id);
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.messsage });
        }
    });

    app.delete("/task/:id", { schema: geralTaskSchema }, async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        await taskService.deleteTask(id);
        return reply.code(200).send();
    });
}
