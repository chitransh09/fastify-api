console.log("executing pragati.routes.ts ");
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getFromFirestoreOptions, sendToFirestoreOptions } from "./pragati.options";

function pragatiRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: () => void) {
  fastify.get("/", getFromFirestoreOptions);

  fastify.post("/", sendToFirestoreOptions);

  done();
}

export default pragatiRoutes;
