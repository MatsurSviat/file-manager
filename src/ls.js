import { __dirname } from "../index.js";
import { readdir } from "fs/promises";

function ls() {
  try {
    return new Promise(async (resolve) => {
      const files = await readdir(__dirname, { withFileTypes: true });

      for (const file of files) {
        console.log(file);
      }

      resolve(ls);
    });
  } catch (error) {
    console.error("Operation failed");
  }
}

export default ls;
