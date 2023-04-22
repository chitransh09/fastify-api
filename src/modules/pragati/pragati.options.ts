console.log("executing pragati.options.ts ");
import { getFromDB, putIntoDB } from "./pragati.controllers";

export const getFromFirestoreOptions = {
  schema: {
    querystring: {
      type: "object",
      required: ["owneremail"],
      properties: {
        owneremail: { type: "string" },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                url: { type: "string" },
                favIconUrl: { type: "string" },
                ownerEmail: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
  handler: getFromDB,
};

export const sendToFirestoreOptions = {
  schema: {
    body: {
      type: "object",
      required: ["title", "url", "favIconUrl", "ownerEmail"],
      properties: {
        title: { type: "string" },
        url: { type: "string" },
        favIconUrl: { type: "string" },
        ownerEmail: { type: "string" },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: putIntoDB,
};
