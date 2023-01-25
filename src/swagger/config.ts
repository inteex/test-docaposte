const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Test docaposte API",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It calculates closest number to zero",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

export const swaggerOptions = {
  swaggerDefinition,
  apis: ["src/swagger/definitions.yaml"],
};
