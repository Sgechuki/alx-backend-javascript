fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1, -1);
    console.log(`Number of students: ${lines.length}`);
    let fieldObj = {};
    for (let x of lines) {
      let student = x.split(',');
      let field = student[3];
      let name = student[0];
      if (field in fieldObj) {
       fieldObj[field].count = fieldObj[field].count + 1;
       fieldObj[field].firstName.push(name);
      } else {
       fieldObj[field] = {count: 1, firstName: [name]};
      }
    }
    for (let key in fieldObj) {
      console.log(`Number of students in ${key}: ${fieldObj[key].count}. List: ${fieldObj[key].firstName}`);
    }
  } else {
      throw new Error("Cannot load the database");
  }
}
module.exports = countStudents;

