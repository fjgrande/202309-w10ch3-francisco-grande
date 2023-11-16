import chalk from "chalk";

import app from "./server/app.js";
import connectToDataBase from "./database/index.js";

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_URL;

if (!mongoDbConnection) {
  console.log(`${chalk.red("Missing enviroment variable. Exiting...")}`);
  process.exit();
}

app.listen(+port, () => {
  console.log(chalk.green(`Listening on http://localhost:${port}`));
});

await connectToDataBase(mongoDbConnection);
