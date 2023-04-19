import { FastifyRequest, FastifyReply } from "fastify";

import { getFromFirestore, sendToFirestore } from "./pragati.utils";
import type { DbDataType, QueryType } from "./pragati.utils";

export async function getFromDB(
  req: FastifyRequest<{ Querystring: QueryType }>,
  reply: FastifyReply
) {
  const { owneremail } = req.query;

  try {
    const response = await getFromFirestore(owneremail);

    return reply.send({ data: response });
  } catch (err) {
    console.log(err);
  }
}

export async function putIntoDB(req: FastifyRequest<{ Body: DbDataType }>, reply: FastifyReply) {
  const { title, url, favIconUrl, ownerEmail } = req.body;

  try {
    await sendToFirestore({ title, url, favIconUrl, ownerEmail });
    return reply.send({ message: "sent!" });
  } catch (err) {
    console.log(err);
  }
}
