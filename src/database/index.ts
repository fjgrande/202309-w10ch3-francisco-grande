import chalk from "chalk";
import mongoose from "mongoose";

const connectToDataBase = async (mongoDbConnection: string) => {
  try {
    await mongoose.connect(mongoDbConnection);

    console.log(chalk.greenBright("Connected to database"));
  } catch (error) {
    console.log(chalk.redBright("Unable to connect to database"));
  }
};

export default connectToDataBase;
