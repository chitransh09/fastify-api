import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { randomPokemonOptions, pokemonOptions, stoicQuoteOptions } from "./misc.options";

function miscRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: () => void) {
  fastify.get("/pokemon", randomPokemonOptions);
  fastify.get("/pokemon/:id", pokemonOptions);

  fastify.get("/stoic", stoicQuoteOptions);

  done();
}

export default miscRoutes;
