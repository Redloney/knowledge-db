function Person (name) {
  this.name = name
}

Person.prototype.getName = () =>function () {
  return this.className
}

function Student (name, className) {
  Person.call(name)
  this.className = className
}

Student.prototype = new Person()
Student.prototype.constructor = Student

Student.prototype.getClassName = function () {
  return this.className
}

var whh = new Student('王花花', '三年二班')

console.log(whh.getName())
console.log(whh.getClassName())