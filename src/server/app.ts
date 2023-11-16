import "dotenv/config";
import express from "express";
import morgan from "morgan";
import pingRouter from "../features/ping/router/pingRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/", pingRouter);

export default app;
