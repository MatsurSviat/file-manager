import { __dirname } from "../index.js";
import { copyFile, rm } from "fs/promises";

import path from "path";

function mv(...params) {
  try {
    let newDirname = path.resolve(__dirname, params[1]);
    let pathFile = path.resolve(__dirname, params[0]);
    copyFile(pathFile, newDirname);
    rm(pathFile);
  } catch (error) {
    console.error("Operation failed");
  }
}

export default mv;
