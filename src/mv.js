import { __dirname } from "../index.js";

import path from "path";

async function mv(...params) {
  try {
    const sourcePath = path.resolve(__dirname, params[0]);
    const destinationPath = path.resolve(__dirname, params[1]);

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);

    readStream.pipe(writeStream);

    readStream.on('end', async () => {
      try {
        await unlink(sourcePath);
        console.log('File moved successfully');
      } catch (error) {
        console.error('Error removing source file:', error);
      }
    });

    readStream.on('error', (error) => {
      console.error('Stream error:', error);
    });

  } catch (error) {
    console.error('Operation failed:', error);
  }
}

export default mv;
