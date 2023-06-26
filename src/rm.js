import { __dirname } from "../index.js";
import { rm } from "fs/promises";

import path from "path";

function rmFile(...params) {
  try {
    let pathFile = path.resolve(__dirname, ...params);
    rm(pathFile);
  } catch (error) {
    console.error("Operation failed");
  }
}

export default rmFile;
