// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // 2. Allow additional attributes
  [key: string]: any;
}

// 3. Create an object satisfying the interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // extra property
};

// 4. Log the result
console.log(teacher3);

// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task 2: Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Test object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3: Function interface and implementation

// 1. Define the interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 2. Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 3. Test it
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Task 4: Writing a class

// 1. Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 2. Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Implementation of the class
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// 4. Example usage (optional for testing)
const student = new StudentClass("Frida", "Mwende");
console.log(student.displayName()); // Frida
console.log(student.workOnHomework()); // Currently working


