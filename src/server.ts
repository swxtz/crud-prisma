import * as dotenv from "dotenv";
dotenv.config();

import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const port = process.env.HOST_PORT || 3000;
const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      staus: "error",
      message: err.message
    })
  } else response.status(500).json({
    staus: "error",
      message: `Algo deu errado e foi nossa culpa: Internal server error - ${err.message}`
  })
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
