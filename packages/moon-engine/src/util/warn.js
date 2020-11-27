export default function warn(message) {
  if (process.env.NODE_ENV !== "production") {
    const msg = [message, new Error().stack.split('at ').pop()].join(' ');
    console.warn(msg);
  }
}