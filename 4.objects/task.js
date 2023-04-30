function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
Student();
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
let student3 = new Student();


Student.prototype.setSubject = function (subjectName) {
  Student.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  Student.addMarks = [...marksToAdd];
}

Student.prototype.getAverage = function () {
  if(Student.marks) {
    return this.marks.reduce((x, y) => x + y / this.marks.length)
  } else {
    return 0
  }
}

Student.prototype.exclude = function (reason) {
  
}

