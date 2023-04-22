console.log("executing swagger.ts ");

const swaggerConfig = {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "Fastify API",
      description: "Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger",
      version: "0.1.0",
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

export default swaggerConfig;
