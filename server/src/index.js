import { config } from "./config/env.js";

import express from "express";

import execRouter from "./routes/exec.routes.js";

const app = express();
const PORT = config.port;

// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Runix Server!");
});
app.use("/api/exec", execRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
