import fastify from "fastify";
import { taskController } from "./controller/TaskController";

const app = fastify();

app.register(taskController);

app.listen({ port: 5505 }).then(() => {
    console.log("Backend running in port 5505!");
});
