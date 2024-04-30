export default function getStudentIdsSum(list) {
  const sum = list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sum;
}
