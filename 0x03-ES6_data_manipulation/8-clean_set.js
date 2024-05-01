export default function cleanSet(set, startString) {
  let str = '';
  if (startString) {
    for (const elem of set) {
      if (elem.startsWith(startString)) {
        if (str.length) {
          str += '-';
        }
        str += elem.slice(startString.length, -1);
      }
    }
  }
  return str;
}
