import fastify from "fastify";
import { taskController } from "./controller/TaskController";
import cors from "@fastify/cors";
import { userController } from "./controller/UserController";

const app = fastify();

app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
});

app.register(taskController);
app.register(userController);

const PORT = 5505;
app.listen({ port: PORT }).then(() => {
    console.log("Backend running in port 5505!");
});
