import express from "express";
import chalk from "chalk";
import debug from "debug";
import app from "./server/app.js";

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_URL;

if (!mongoDbConnection) {
  debug(`${chalk.red("Missing enviroment variable. Exiting...")}`);
  process.exit();
}

app.listen(+port, () => {
  debug(chalk.green(`Listening on http://localhost:${port}`));
});
