import "dotenv/config";
import express from "express";
import morgan from "morgan";
import pingRouter from "../features/ping/router/pingRouter.js";
import { notFound } from "./middlewares/errors/errorMiddleware.js";
import characterRouter from "../features/characters/router/characterRouter.js";

const app = express();
app.disable("x-powered-by");

app.use(express.json());

app.use(morgan("dev"));

app.use("/", pingRouter);

app.use("/characters", characterRouter);

app.use(notFound);

export default app;
