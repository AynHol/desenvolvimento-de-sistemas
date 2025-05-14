export const swaggerConfig = {
    openapi: {
        info: {
            title: "API Task TODO LIST",
            description: "API do projeto de tarefas",
            version: "1.0.1",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerformat: "JWT",
                },
            },
        },
    },
    exposeRoute: true,
};
