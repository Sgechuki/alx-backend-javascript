export default function cleanSet(set, startString) {
  let str = '';
  if (startString === '' || typeof startString !== 'string') {
    return str;
  }
  for (const elem of set) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      if (str.length) {
        str += '-';
      }
      str += elem.slice(startString.length, -1);
    }
  }

  return str;
}
