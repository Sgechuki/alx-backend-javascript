interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: bool,
  yearsOfExperience?: number,
  location: number,
  [key: string]: any
  }


interface Directors extends Teacher {
  numberOfReports: number
  }

interface printTeacherFunction {
  (firstName: string, lastName: string): string
  }

let printTeacher: printTeacherFunction = function (firstName: string, lastName: string) {
  return `${firstName.charAt(0). ${lastName}`;
  }
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
