import fastify from "fastify";
import { taskController } from "./controller/TaskController";

const app = fastify();

app.register(taskController);

const PORT = 5505;
app.listen({ port: PORT }).then(() => {
    console.log("Backend running in port 5505!");
});
