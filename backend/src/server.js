import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import job from "./config/cron.js";
dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") job.start();

//middleware (authentication, console log ...)
app.use(ratelimiter);
app.use(express.json());

const PORT = process.env.PORT;

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Its working!");
});

// you can add more routes
app.use("/api/transactions", transactionsRoute);
// app.use("/api/products", productsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT: ", PORT);
  });
});
