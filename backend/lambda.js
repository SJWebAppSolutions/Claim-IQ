const serverless = require("serverless-http");
const app = require("./src/app");
const connectDB = require("./src/config/db");

let handler;

module.exports.handler = async (event, context) => {
  // reuse connection
  if (!handler) {
    await connectDB();
    handler = serverless(app);
  }

  return handler(event, context);
};