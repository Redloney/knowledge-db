// 苦难版

const _new = function (target) {
  //  创建一个新对象 , 让这个新对象的原型 指向该构造函数的 原型对象
  let result = Object.create(target.prototype)
  //  截取函数的 参数列表
  let args = [].slice.call(arguments, 1)
  let ret = target.apply(result, args)
  return (typeof ret === 'object' && ret !== null) || typeof ret === 'function' ? ret : result
}

function Person (name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
  // return { name: this.name }
}

let whh = _new(Person, '王花花', 20, '女')

console.log(whh)

// -------------------------------------------------------

// 简单版

// new 操作符的流程 ：

// 1. 定义一个空对象

// 2. 实例的 隐式原型指向构造函数的显式原型

// 3. 执行构造函数，this指向空对象

// 4. 返回对象

function myNew (Constructor, ...args) {

  // 1.定义一个空对象
  const obj = {};

  // 2.隐式原型指向构造函数的显式原型
  obj._proto_ = Constructor.prototype;

  // 3.执行构造函数，this指向空对象
  Constructor.apply(obj, args)

  // 4.返回对象
  return obj;

}