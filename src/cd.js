import path from "path";
import { __dirname } from "../index.js";

function cd(...params) {
  try {
    let newDirname = path.resolve(__dirname, ...params);
    return newDirname;
  } catch (error) {
    console.error("Operation failed");
  }
}

export default cd;
