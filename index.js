import readline from "readline";
import os from "os";

import up from "./src/up.js";
import cd from "./src/cd.js";
import ls from "./src/ls.js";
import cat from "./src/cat.js";
import add from "./src/add.js";
import rn from "./src/rn.js";
import cp from "./src/cp.js";
import mv from "./src/mv.js";
import rm from "./src/rm.js";
import osModule from "./src/os.js";
import hash from "./src/hash.js";

// // Get username from command line arguments
const args = Object.entries(
  process.argv.slice(2).map((arg) => {
    const [key, value] = arg.split("=");
    return [key, value];
  })
);

const flattedArgs = args.flat(2);

const usernameIndex = flattedArgs.findIndex((arg) => arg === "--username");

const username =
  usernameIndex !== -1 ? flattedArgs[usernameIndex + 1] : "Stranger";

// Create readline interface for user input
const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display welcome message
console.log(`Welcome to the File Manager, ${username}!`);

//Home directory
let fileDir = os.homedir();

//Display home directory
export let __dirname = fileDir;
console.log(`You are currently in ${__dirname}`);

// User inputs command
readl.on("line", async (res) => {
  const [command, ...params] = res.split(" ");
  let promise;
  const error = "Invalid input";
  switch (command) {
    case "up":
      __dirname = up();
      promise = new Promise((resolve) => resolve());
      break;
    case "cd":
      __dirname = cd(...params);
      promise = new Promise((resolve) => resolve());
      break;
    case "ls":
      promise = ls();
      break;
    case "cat":
      promise = cat(...params);
      promise = new Promise((resolve) => resolve());
      break;
    case "add":
      promise = add(...params);
      promise = new Promise((resolve) => resolve());
    case "rn":
      promise = rn(...params);
      promise = new Promise((resolve) => resolve());
    case "cp":
      promise = cp(...params);
      promise = new Promise((resolve) => resolve());
    case "mv":
      promise = mv(...params);
      promise = new Promise((resolve) => resolve());
    case "rm":
      promise = rm(...params);
      promise = new Promise((resolve) => resolve());
      break;
    case "os":
      promise = osModule(...params);
      promise = new Promise((resolve) => resolve());
      break;
    case "hash":
      promise = hash(...params);
      promise = new Promise((resolve) => resolve());
      break;
    case "":
      console.log("\n");
      promise = new Promise((resolve) => resolve());
      break;

    case ".exit":
      readl.close();
    default:
      console.log(error);
      promise = new Promise((resolve) => resolve());
  }

  promise.then((result) => {
    console.log(`You are currently in ${__dirname}`);
  });
});

//close file manager
readl.on("close", () => {
  console.log(`Thank you for using File Manager, ${username}!`);
});

// Ask user for command input
// rl.question(
//   "Enter a command (ls, cd, mkdir, touch, cat, cp, mv, rm, rename, hash, compress, decompress): ",
//   (command) => {
//     // Parse command and execute corresponding function
//     switch (command) {
//       case "ls":
//         listFiles();
//         break;
//       case "cd":
//         changeDirectory();
//         break;
//       case "mkdir":
//         createDirectory();
//         break;
//       case "touch":
//         createFile();
//         break;
//       case "cat":
//         readFile();
//         break;
//       case "cp":
//         copyFile();
//         break;
//       case "mv":
//         moveFile();
//         break;
//       case "rm":
//         deleteFileOrDirectory();
//         break;
//       case "rename":
//         renameFileOrDirectory();
//         break;
//       case "hash":
//         calculateHash();
//         break;
//       case "compress":
//         compressFileOrDirectory();
//         break;
//       case "decompress":
//         decompressFileOrDirectory();
//         break;
//       default:
//         console.log("Invalid command");
//     }

//     // Close readline interface and display goodbye message
//     rl.close();
//     console.log(`Thank you for using File Manager, ${username}, goodbye!`);
//   }
// );

// function listFiles() {
//   fs.readdir(".", (err, files) => {
//     if (err) throw err;
//     console.log(files);
//   });
// }

// function changeDirectory() {
//   rl.question("Enter directory path: ", (directoryPath) => {
//     process.chdir(directoryPath);
//   });
// }

// function createDirectory() {
//   rl.question("Enter directory name: ", (directoryName) => {
//     fs.mkdir(directoryName, (err) => {
//       if (err) throw err;
//       console.log(`Created directory ${directoryName}`);
//     });
//   });
// }

// function createFile() {
//   rl.question("Enter file name: ", (fileName) => {
//     fs.writeFile(fileName, "", (err) => {
//       if (err) throw err;
//       console.log(`Created file ${fileName}`);
//     });
//   });
// }

// function readFile() {
//   rl.question("Enter file name: ", (fileName) => {
//     fs.readFile(fileName, "utf8", (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   });
// }

// function copyFile() {
//   rl.question("Enter source file path: ", (sourceFilePath) => {
//     rl.question("Enter destination file path: ", (destinationFilePath) => {
//       fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
//         if (err) throw err;
//         console.log(
//           `Copied file from ${sourceFilePath} to ${destinationFilePath}`
//         );
//       });
//     });
//   });
// }

// function moveFile() {
//   rl.question("Enter source file path: ", (sourceFilePath) => {
//     rl.question("Enter destination file path: ", (destinationFilePath) => {
//       fs.rename(sourceFilePath, destinationFilePath, (err) => {
//         if (err) throw err;
//         console.log(
//           `Moved file from ${sourceFilePath} to ${destinationFilePath}`
//         );
//       });
//     });
//   });
// }

// function deleteFileOrDirectory() {
//   rl.question("Enter file or directory path: ", (path) => {
//     fs.rm(path, { recursive: true }, (err) => {
//       if (err) throw err;
//       console.log(`Deleted ${path}`);
//     });
//   });
// }

// function renameFileOrDirectory() {
//   rl.question("Enter source file or directory path: ", (sourcePath) => {
//     rl.question(
//       "Enter destination file or directory path: ",
//       (destinationPath) => {
//         fs.rename(sourcePath, destinationPath, (err) => {
//           if (err) throw err;
//           console.log(`Renamed ${sourcePath} to ${destinationPath}`);
//         });
//       }
//     );
//   });
// }

// function calculateHash() {
//   rl.question("Enter file path: ", (filePath) => {
//     const hash = crypto.createHash("sha256");
//     const input = fs.createReadStream(filePath);
//     input.on("readable", () => {
//       const data = input.read();
//       if (data) {
//         hash.update(data);
//       } else {
//         console.log(hash.digest("hex"));
//       }
//     });
//   });
// }

// function compressFileOrDirectory() {
//   rl.question("Enter file or directory path: ", (path) => {
//     const gzip = zlib.createGzip();
//     const input = fs.createReadStream(path);
//     const output = fs.createWriteStream(`${path}.gz`);
//     input.pipe(gzip).pipe(output);
//     console.log(`Compressed ${path} to ${path}.gz`);
//   });
// }

// function decompressFileOrDirectory() {
//   rl.question("Enter compressed file path: ", (compressedFilePath) => {
//     const gunzip = zlib.createGunzip();
//     const input = fs.createReadStream(compressedFilePath);
//     const output = fs.createWriteStream(compressedFilePath.slice(0, -3));
//     input.pipe(gunzip).pipe(output);
//     console.log(
//       `Decompressed ${compressedFilePath} to ${compressedFilePath.slice(0, -3)}`
//     );
//   });
// }
