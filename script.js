// complete this js code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Expose globally for browser tests
if (typeof window !== 'undefined') {
  window.Person = Person;
  window.Employee = Employee;
}

// Export for CommonJS/Node test environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Person, Employee };
}
