import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {
    app.post("/task", (request, reply) => {
        // Pegar informação do front ou de quem chamar o endpoint (text)
        const body = request.body as { text: string };

        // Retorna code 201 ou envia erro se achar erro
        try {
            taskService.create(body.text);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ error: error.messsage });
        }
    });

    app.get("/tasks", (_, reply) => {
        const list = taskService.getAll();
        return reply.code(200).send(list);
    });

    app.get("/tasks/:id", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const tasks = taskService.getById(id);
        return reply.code(200).send(tasks);
    });

    app.patch("/tasks/:id/completed", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        try {
            const task = taskService.updateCompleted(id);
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.messsage });
        }
    });

    app.patch("/task/:id/text", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const { text } = request.body as { text: string };
        try {
            const task = taskService.updateText(id, text);
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.messsage });
        }
    });
}
