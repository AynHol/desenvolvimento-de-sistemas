export const geralTaskSchema = {
    tags: ["Task"],
    security: [{ bearerAuth: [] }],
};

export const taskSchema = {
    body: {
        type: "object",
        required: ["text"],
        properties: {
            text: { type: "string" },
        },
    },
    tags: ["Task"],
    security: [{ bearerAuth: [] }],
    summary: "Endpoint to create a task",
};
