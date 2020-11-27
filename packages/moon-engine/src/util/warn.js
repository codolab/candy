import { Configuration } from "../Configuration";

export default function warn(message) {
  const strict = Configuration.option("strict");
  if (strict) {
    const callerLine = new Error().stack.split("\n").pop();
    const index = callerLine.indexOf("at ");
    const clean = callerLine.slice(index + 2, callerLine.length);
    const msg = [message, clean].join("");
    console.warn(msg);
  }
}