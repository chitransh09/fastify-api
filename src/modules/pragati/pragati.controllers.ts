console.log("executing pragati.controllers.ts ");

import { FastifyRequest, FastifyReply } from "fastify";

import {
  checkIfDocExistsInFirestore,
  sendToFirestore,
  deleteInFirestore,
  getAllDocsFromFirestore,
} from "./pragati.utils";
import type { DbDataType, QueryType } from "./pragati.utils";

export async function getFromDB(
  req: FastifyRequest<{ Querystring: QueryType }>,
  reply: FastifyReply
) {
  const { owneremail } = req.query;

  try {
    const response = await getAllDocsFromFirestore(owneremail);

    return reply.send({ data: response });
  } catch (err) {
    console.log(err);
  }
}

export async function putIntoDB(req: FastifyRequest<{ Body: DbDataType }>, reply: FastifyReply) {
  const { title, url, favIconUrl, ownerEmail } = req.body;

  try {
    const bookmarkExists = await checkIfDocExistsInFirestore(ownerEmail, title);
    if (bookmarkExists) {
      return reply.send({ message: "bookmark already exists" });
    } else {
      await sendToFirestore({ title, url, favIconUrl, ownerEmail });
      return reply.send({ message: "sent!" });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function delInDB(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = req.params;

  try {
    await deleteInFirestore(id);
    return reply.send({ message: "deleted!" });
  } catch (err) {
    console.log(err);
  }
}
