import { config } from "./config/env.js";

import express from "express";

const app = express();
const PORT = config.port;

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Runix Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
