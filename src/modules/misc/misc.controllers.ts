import { FastifyRequest, FastifyReply } from "fastify";
import axios from "axios";

export async function getRandomPokemon(req: FastifyRequest, reply: FastifyReply) {
  let randomID = Math.floor(Math.random() * 1000) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomID}`;

  try {
    const response = await axios.get(url);

    const reqData = {
      name: response.data.name,
      order: response.data.order,
      types: response.data.types.map((type: any) => type.type.name),
      abilities: response.data.abilities.map((ability: any) => ability.ability.name),
      base_experience: response.data.base_experience,
    };

    return reply.send({ data: reqData });
  } catch (err) {
    console.error(err);
  }
}

export async function getPokemon(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = req.params;
  console.log("🚀 ⚡ file: misc.controllers.ts:30 ⚡ id:", id);

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const response = await axios.get(url);

    const reqData = {
      name: response.data.name,
      order: response.data.order,
      types: response.data.types.map((type: any) => type.type.name),
      abilities: response.data.abilities.map((ability: any) => ability.ability.name),
      base_experience: response.data.base_experience,
    };

    return reply.send({ data: reqData });
  } catch (err) {
    console.error(err);
  }
}

export async function getStoicQuote(req: FastifyRequest, reply: FastifyReply) {
  const url = "https://stoic-quotes.com/api/quote";

  try {
    const response = await axios.get(url);

    const reqData = {
      text: response.data.text,
      author: response.data.author,
    };

    return reply.send({ data: reqData });
  } catch (err) {
    console.error(err);
  }
}
