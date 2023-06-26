import { createReadStream } from "fs";
import { __dirname } from "../index.js";

import path from "path";

function cat(...params) {
  try {
    const pathFile = path.join(__dirname, ...params);

    const rs = createReadStream(pathFile, { flags: "r", encoding: "utf-8" });
    rs.pipe(process.stdout);
    process.stdout.write("\n");
  } catch (error) {
    console.error("Operation failed");
  }
}

export default cat;
