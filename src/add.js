import { __dirname } from "../index.js";

import path from "path";
import fs from "fs";
const { stdin } = process;

function add(...params) {
  try {
    const pathFile = path.join(__dirname, ...params);
    const readableStream = fs.createWriteStream(pathFile, { flags: "wx" });
    readableStream.on("data", (chunk) => console.log(chunk.toString()));
    stdin.on("data", (data) => {
      readableStream.write("data");
    });
  } catch (error) {
    console.error("Operation failed");
  }
}

export default add;
