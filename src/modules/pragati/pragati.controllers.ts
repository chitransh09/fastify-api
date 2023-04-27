console.log("executing pragati.controllers.ts ");

import { FastifyRequest, FastifyReply } from "fastify";

import {
  getFromFirestore,
  sendToFirestore,
  deleteInFirestore,
  isDbDataTypeArray,
} from "./pragati.utils";
import type { DbDataType, DbFetchedDataType, QueryType } from "./pragati.utils";

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
    const existingBookmarks = await getFromFirestore(ownerEmail);
    if (!existingBookmarks) return reply.send({ message: "user not found" });

    if (!isDbDataTypeArray(existingBookmarks)) return reply.send({ message: "user not found" });

    if (existingBookmarks.some((bookmark) => bookmark.url === url)) {
      return reply.send({ message: "bookmark already exists" });
    }

    await sendToFirestore({ title, url, favIconUrl, ownerEmail });
    return reply.send({ message: "sent!" });
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
