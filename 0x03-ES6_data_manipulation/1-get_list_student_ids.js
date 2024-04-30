export default function (arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((obj) => obj.id);
}
