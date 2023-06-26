import path from "path";
import { __dirname } from "../index.js";

function up() {
  try {
    let newDirname = path.parse(__dirname).dir;
    return newDirname;
  } catch (error) {
    console.error("Operation failed");
  }
}

export default up;
