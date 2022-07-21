class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  print () {
    console.log("this ", this)
    console.log(this.name, this.age)
  }
}
const p = new People("1", 2)
p.print()

const func = p.print
// func()
func.call({
  name: "222",
  age: 222
})
