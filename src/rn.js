import { __dirname } from "../index.js";
import { rename } from "fs/promises";

import path from "path";

function rn(...params) {
  try {
    let newDirname = path.resolve(__dirname, params[1]);
    let pathFile = path.resolve(__dirname, params[0]);

    rename(pathFile, newDirname);
  } catch (error) {
    console.error("Operation failed");
  }
}

export default rn;
