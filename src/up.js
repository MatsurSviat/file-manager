import path from "path";
import { __dirname } from "../index.js";

export const up = () => {
  try {
    let oneStepBack=path.join(__dirname,'../');
    return oneStepBack
  } catch (error) {
    console.error("Operation failed");
  }
}
