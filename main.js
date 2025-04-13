class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  obtDetails = () => {
    console.log(
      `name: ${this.name}, age: ${this.age} and gender: ${this.gender}`
    );
  };
}

// const myPerson = new Person("Alice", 30, "female");
// myPerson.obtDetails();

class Student extends Person {
  constructor(name, age, gender, course, group) {
    super(name, age, gender);
    this.course = course;
    this.group = group;
  }
  register = () => {
    this.obtDetails();
    console.log(`course: ${this.course}, group: ${this.group}`);
  };
}

// const myStudent = new Student("Adam", 15, "male", "4th", "lion");
// myStudent.register();

class Teacher extends Student {
  constructor(name, age, gender, course, group, subject, level) {
    super(name, age, gender, course, group);
    this.subject = subject;
    this.level = level;
  }
  assign = () => {
    this.register();
    console.log(`subject: ${this.subject}, level: ${this.level}`);
  };
}

// const myTeacher = new Teacher(
//   "Nala",
//   45,
//   "female",
//   "4th",
//   "lion",
//   "roar",
//   "master"
// );
// myTeacher.assign();
