import { __dirname } from "../index.js";
import { createReadStream } from "fs";
import { createHash } from "crypto";

import path from "path";

function hash(...params) {
  try {
    let newDirname = path.resolve(__dirname, ...params);

    const hash = createHash("sha256");
    const rs = createReadStream(newDirname);
    let data = "";

    rs.on("data", (chunk) => (data += chunk));

    rs.on("end", () => {
      hash.update(data);
      console.log(hash.digest("hex"));
      console.log("ENTER for continue");
    });
  } catch (error) {
    console.error("Operation failed");
  }
}

export default hash;
