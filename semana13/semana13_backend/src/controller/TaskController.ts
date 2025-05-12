import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {
    app.post("/task", async (request, reply) => {
        // Pegar informação do front ou de quem chamar o endpoint (text)
        const body = request.body as { text: string };

        // Retorna code 201 ou envia erro se achar erro
        try {
            await taskService.create(body.text);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ error: error.messsage });
        }
    });

    app.get("/task", async (_, reply) => {
        const list = await taskService.getAll();
        return reply.code(200).send(list);
    });

    app.patch("/task/:id/completed", async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        try {
            const task = await taskService.updateCompleted(id);
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.messsage });
        }
    });

    app.delete("/task/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        await taskService.deleteTask(id);
        return reply.code(200).send();
    });
}
