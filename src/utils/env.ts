console.log("executing env.ts ");
const schema = {
  type: "object",
  required: ["FIREBASE_SERVICE_KEY"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
    watcha: {
      type: "string",
    },
    FIREBASE_SERVICE_KEY: {
      type: "string",
    },
  },
};

const envConfig = {
  confKey: "config",
  schema: schema,
  dotenv: true,
};

export default envConfig;
