import { __dirname } from "../index.js";
import { readdir } from "fs/promises";

async function ls() {
  try {
    const files = await readdir(__dirname, { withFileTypes: true });

    const fileData = files.map(file => {
      return {
        name: file.isDirectory() ? file.name : `${file.name}.${file.name.split('.').pop()}`,
        type: file.isDirectory() ? 'directory' : 'file',
      };
    });

    const sortedFileData = fileData.sort((a, b) => {
      if (a.type === b.type) {
        return a.name.localeCompare(b.name);
      } else {
        return a.type === 'directory' ? -1 : 1;
      }
    });

    console.table(sortedFileData);

    return ls;
  } catch (error) {
    console.error("Operation failed");
  }
}

export default ls;