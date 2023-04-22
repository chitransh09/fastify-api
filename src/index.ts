console.log("executing index.ts");
import Fastify from "fastify";
import dotenv from "dotenv";
dotenv.config();
console.log("dotenv configured!");
console.log(process.env.watcha);

import loggerConfig from "./utils/logger";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
// import fastifyEnv from "@fastify/env";

// import envConfig from "./utils/env";
import swaggerConfig from "./utils/swagger";

import miscRoutes from "./modules/misc/misc.routes";
import pragatiRoutes from "./modules/pragati/pragati.routes";

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

function buildServer() {
  const fastify = Fastify({
    logger: loggerConfig,
  });

  (async function loadMiddlewares() {
    // await fastify.register(fastifyEnv, envConfig);
    // console.log("env configured!");
    fastify.register(cors, { credentials: true, origin: "*" });
    fastify.register(swagger, swaggerConfig);

    // routes
    fastify.register(miscRoutes, { prefix: "/misc" });
    fastify.register(pragatiRoutes, { prefix: "/pragati" });
  })();

  // Run the server!
  const startServer = async () => {
    console.log("executing startServer");
    try {
      await fastify.listen({ port: PORT as number });
      console.log(`listening on ${PORT}`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  startServer();

  process.on("uncaughtException", (err) => {
    console.error(err);
  });
  process.on("unhandledRejection", (err) => {
    console.error(err);
  });
}

buildServer();
