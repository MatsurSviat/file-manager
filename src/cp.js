import { __dirname } from "../index.js";
import { copyFile } from "fs/promises";

import path from "path";

function cp(...params) {
  try {
    let newDirname = path.resolve(__dirname, params[1]);
    let pathFile = path.resolve(__dirname, params[0]);
    copyFile(pathFile, newDirname);
  } catch (error) {
    console.error("Operation failed");
  }
}

export default cp;
