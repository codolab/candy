function djb2_xor(str) {
  let len = str.length;
  let h = 5381;

  for (let i = 0; i < len; i++) {
    h = (h * 33) ^ str.charCodeAt(i);
  }
  return h >>> 0;
}

export default djb2_xor;
