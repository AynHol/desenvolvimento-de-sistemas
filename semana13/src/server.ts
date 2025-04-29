import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
    console.log("Entered the endpoint HELLO!!!")
    return "Hello World!!!"
})

app.listen({ port: 5505 }).then(() =>
    console.log("Backend running in port 5505")
);
