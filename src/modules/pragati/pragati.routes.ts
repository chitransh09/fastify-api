console.log("executing pragati.routes.ts ");
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  deleteInFirestoreOptions,
  getFromFirestoreOptions,
  sendToFirestoreOptions,
} from "./pragati.options";

function pragatiRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: () => void) {
  fastify.get("/", getFromFirestoreOptions);

  fastify.post("/", sendToFirestoreOptions);

  fastify.delete("/", deleteInFirestoreOptions);

  done();
}

export default pragatiRoutes;
