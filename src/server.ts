import * as dotenv from "dotenv";
dotenv.config();

import express from "express";

const port = process.env.HOST_PORT || 3000;
const app = express();

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
