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