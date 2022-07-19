

let obj = new Object({ name: '小明', age: 19 })

console.log(obj) // { name: '小明', age: 19 }


// 创建一个空的简单 JavaScript 对象 {}
// 为步骤 1 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 将步骤 1 新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。

const _new = function (Constructor, ...args) {
  console.log(Constructor, args)
  let obj = {}
  obj.__proto__ = Object
}

