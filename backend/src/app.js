require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const errorMiddleware = require("./middlewares/error.middleware");
const homeRoutes = require("./routes/home.routes");
const layoutRoutes =  require("./routes/layout.routes");
const aboutRoutes = require("./routes/about.routes");
const contactRoutes = require("./routes/contact.routes");
const referralRoutes = require("./routes/referral.routes");
const serviceRoutes = require("./routes/service.routes");
const policyRoutes = require("./routes/policy.routes");

const app = express();

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(
  cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://claim-iq-blond.vercel.app",
    "https://claimiqconsulting.com"
  ],
  credentials: true
  })
);

app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/home", homeRoutes);
app.use("/api/layout", layoutRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/referral", referralRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/privacy-policy", policyRoutes);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error handler
app.use(errorMiddleware);

module.exports = app;