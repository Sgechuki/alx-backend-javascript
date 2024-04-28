export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(emp) {
      return Object.keys(emp).length;
    },
  };
}
