const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
  },
};

const envConfig = {
  confKey: "config",
  schema: schema,
  dotenv: true,
};

export default envConfig;
