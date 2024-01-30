import readline from "readline";
import os from "os";

import { up } from "./src/up.js";
import { cd } from "./src/cd.js";
import ls from "./src/ls.js";
import cat from "./src/cat.js";
import add from "./src/add.js";
import rn from "./src/rn.js";
import cp from "./src/cp.js";
import mv from "./src/mv.js";
import rm from "./src/rm.js";
import osModule from "./src/os.js";
import hash from "./src/hash.js";

// // Get username from command line arguments
const args = Object.entries(
  process.argv.slice(2).map((arg) => {
    const [key, value] = arg.split("=");
    return [key, value];
  })
);

const flattedArgs = args.flat(2);

const usernameIndex = flattedArgs.findIndex((arg) => arg === "--username");

const username =
  usernameIndex !== -1 ? flattedArgs[usernameIndex + 1] : "Stranger";

// Create readline interface for user input
const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display welcome message
console.log(`Welcome to the File Manager, ${username}!`);

//Home directory
let fileDir = os.homedir();

//Display home directory
export let __dirname = fileDir;
console.log(`You are currently in ${__dirname}`);

// User inputs command
readl.on("line", async (res) => {
  const [command, ...params] = res.split(" ");
  let promise;
  const error = "Invalid input";

  switch (command) {
    case "up":
      __dirname = up();
      break;
    case "cd":
      __dirname = cd(...params);
      break;
    case "ls":
      promise = ls();
      break;
    case "cat":
      promise = cat(...params);
      break;
    case "add":
      promise = add(...params);
      break;
    case "rn":
      promise = rn(...params);
      break;
    case "cp":
      promise = cp(...params);
      break;
    case "mv":
      promise = mv(...params);
      break;
    case "rm":
      promise = rm(...params);
      break;
    case "os":
      promise = osModule(...params);
      break;
    case "hash":
      promise = hash(...params);
      break;
    case "":
      console.log("\n");
      break;
    case ".exit":
      readl.close();
      break;
    default:
      console.log(error);
  }

  if (promise) {
    await promise;
  }

  console.log(`You are currently in ${__dirname}`);
});

//close file manager
readl.on("close", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});
