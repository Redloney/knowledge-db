// const _new = function (target) {
//   //  创建一个新对象 , 让这个新对象的原型 指向该构造函数的 原型对象
//   let result = Object.create(target.prototype)
//   //  截取函数的 参数列表
//   let args = [].slice.call(arguments, 1)
//   let ret = target.apply(result, args)
//   return (typeof ret === 'object' && ret !== null) || typeof ret === 'function' ? ret : result
// }

let _new = function (Constructor) {
  // 创建一个对象 隐式原型指向 构造函数的显式原型
  let result = Object.create(Constructor.prototype)
  // 获取参数
  let args = [].slice.call(arguments, 1)
  // 借用构造函数 对新实例写入数据
  let example = Constructor.apply(result, args)
  // 判断新实例 是否正确创建
  if (typeof example === 'object' && example !== null || typeof example === 'function') {
    return example
  } else {
    return result
  }
}

let obj = _new(Array, 1, 2, 3, 4, 5, 6)
let obj2 = _new(Object, { name: '王花花', age: 17, colors: ['pink', 'blue'] })
let obj3 = _new(Function, 'console.log(123)')

console.log(obj)
console.log(obj2)
console.log(obj3)