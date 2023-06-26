import { __dirname } from "../index.js";
import os from "os";

function osModule(...params) {
  try {
    const param = params[0].slice(2);
    switch (param) {
      case "EOL": {
        console.log(JSON.stringify(os.EOL));
        break;
      }
      case "username": {
        console.log(JSON.stringify(os.userInfo().username));
        break;
      }

      case "homedir": {
        console.log(JSON.stringify(os.homedir()));
        break;
      }

      case "cpus": {
        console.log("Cpus count: ", JSON.stringify(os.cpus().length));
        console.log("Model: ", JSON.stringify(os.cpus()[0].model));
        console.log(
          "GHz: ",
          (JSON.stringify(os.cpus()[0].speed) / 1000).toFixed(2)
        );
        break;
      }

      case "architecture": {
        console.log("Arch: ", JSON.stringify(os.arch()));

        break;
      }
    }
  } catch (error) {
    console.error("Operation failed");
  }
}

export default osModule;
