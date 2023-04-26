import { FastifyRequest, FastifyReply } from "fastify";

const indexRouteOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: function (request: FastifyRequest, reply: FastifyReply) {
    reply.send({ message: "Rolling Thunder!!!!" });
  },
};

export default indexRouteOptions;
