import Fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import fastifyEnv from "@fastify/env";

import loggerConfig from "./utils/logger";
import envConfig from "./utils/env";
import { swaggerConfig } from "./utils/swagger";
import miscRoutes from "./modules/misc/misc.routes";
import pragatiRoutes from "./modules/pragati/pragati.routes";

const PORT = 3000;
const HOST = "0.0.0.0";
const fastify = Fastify({
  logger: loggerConfig,
});

// middlewares
async function loadMiddleware() {
  await fastify.register(fastifyEnv, envConfig);
  fastify.register(cors, { credentials: true, origin: "*" });
  fastify.register(swagger, swaggerConfig);
}

// routes
fastify.register(miscRoutes, { prefix: "/misc" });
fastify.register(pragatiRoutes, { prefix: "/pragati" });

// Run the server!
const start = async () => {
  try {
    await loadMiddleware();
    console.log("🚀🚀 the full env: ", process.env);
    await fastify.listen({ port: PORT, host: HOST });
    console.log(`listening on ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

process.on("uncaughtException", (err) => {
  console.error(err);
});
process.on("unhandledRejection", (err) => {
  console.error(err);
});

start();
