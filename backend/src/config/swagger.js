const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Claim IQ",
      version: "1.0.0",
      description: "API documentation for Node.js backend"
    },
    servers: [
      {
        url:
          location.hostname === "localhost"
            ? "http://localhost:5000"
            : "https://claim-iq.onrender.com",
      }
    ]
  },
  apis: ["./src/routes/swagger/*.swagger.js"]
};


module.exports = swaggerJsdoc(swaggerOptions);