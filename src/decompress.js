import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from "stream/promises";
import { __dirname } from "../index.js";
import path from "path";
import { createBrotliDecompress } from "zlib";

async function decompress(...params) {
    try {
        const sourcePath = path.resolve(__dirname, params[0]);
        const destinationPath = path.resolve(__dirname, params[1]);

        await pipeline(
            createReadStream(sourcePath),
            createBrotliDecompress(),
            createWriteStream(destinationPath)
          );
        

    } catch (error) {
      console.error('Compression failed:', error);
    }
  }
  
export default decompress;