// let arr = [1, 2, 3, 4, 5]

// let [a, b, c, d, e] = arr

// console.log(a, b, c, d, e)

// let { name, age, gender } = { name: '小明', age: 18, gender: '男' }

// console.log(name, age, gender)


// let arr = [
//   { name: '小明', age: 18, gender: '男' },
//   { name: '小李', age: 20, gender: '男' },
//   { name: '小红', age: 22, gender: '女' },
// ]

// arr.forEach(function ({ name, age, gender }, index) {
//   console.log(name, age, gender)
//   // console.log(`我是${name},今年${age}岁 ~ 性别${gender}`)
// })


// let arr = [1, 6, 1, 8, 2, 9]

// let max = arr.sort((a, b) => (b - a))[0]

// console.log(max)

// console.log(max);

// 1.

// function fn(num) {
//   return num + 1
// }

// let fnn = num => num + 1

// console.log(fnn(1))

let obj = {
  name1: '小明',
  getName: () => {
    console.log(this);
    console.log(this.name1)
  }
}

obj.getName()

let obj2 = {

}

obj2.getName = obj.getName

obj2.getName()


