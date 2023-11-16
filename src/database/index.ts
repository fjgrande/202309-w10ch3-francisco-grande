import chalk from "chalk";
import debug from "debug";
import mongoose from "mongoose";

const connectToDataBase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);

    debug(chalk.greenBright("Connected to database"));
  } catch (error) {
    debug(chalk.redBright("Imposible to connect to database"));
  }
};

export default connectToDataBase;
