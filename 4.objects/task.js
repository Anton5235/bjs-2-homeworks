function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
Student();
let student1 = new Student();
let student2 = new Student();
let student3 = new Student();


Student.prototype.setSubject = function (subjectName) {
  Student.setSubject(subjectName)
}

Student.prototype.addMarks = function (...marksToAdd) {
  Student.hasOwnProperty(this.marks);
  Student.addMarks(...marksToAdd)
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
