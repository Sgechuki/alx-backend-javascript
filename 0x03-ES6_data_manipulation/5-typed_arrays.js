export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length, 0, length);
  const u = new Int8Array(buffer);
  u[position] = value;
  return buffer;
}
