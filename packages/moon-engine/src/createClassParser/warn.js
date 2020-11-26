export default function warn(message) {
  const msg = [message, new Error().stack.split('at ').pop()].join(' ');
  console.warn(msg);
}