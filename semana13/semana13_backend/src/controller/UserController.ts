import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../service/UserService";

export async function userController(app: FastifyInstance) {
    app.post("/user/register", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as CreateUserType;

        try {
            await userService.register(body);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(400).send({ error: error.messsage });
        }
    });

    app.post("/user/login", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as LoginType;

        try {
            const token = await userService.login(body);
            return reply.code(200).send({ access_token: token });
        } catch (error: any) {
            return reply.code(401).send({ error: error.messsage });
        }
    });
}
