import fastify from "fastify";
import { taskController } from "./controller/TaskController";
import cors from "@fastify/cors";
import { userController } from "./controller/UserController";
import authjwt from "./middleware/authjwt";
import fastifySwagger from "@fastify/swagger";
import { swaggerConfig } from "./config/swaggerConfig";
import fastifySwaggerUi from "@fastify/swagger-ui";

const app = fastify();

app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
});

app.register(fastifySwagger, swaggerConfig as any);
app.register(fastifySwaggerUi, { routePrefix: "/docs", uiConfig: { docExpansion: "list" } });
app.register(authjwt);
app.register(taskController);
app.register(userController);

const PORT = 5505;
app.listen({ port: PORT }).then(() => {
    console.log(`Backend running in port: ${PORT}!`);
});
