
// Object.prototype.toString.call()

// 功能简单但是确是类型检测界的 “扛把子”

// 那么 Object.prototype.toString.call() 是怎么实现输出不同类型的 ???

// 首先 toString 方法 几乎每种数据类型都有 其作用是返回对象的字符串表现

// 但是 每种数据类型的功能不一样 这是因为 每种数据类型都重写了自己原型上的 toString 方法

// 所以 每种数据类型 的 toString 方法的返回值不一样

// 那 Object.prototype.toString.call() 是如何做类型判断的, 同时输出的类型为什么不一样

// 因为 万物皆对象 ~ 所以 对象( Object ) 身上的 toString 方法 是最原始最纯粹的

// 而 其他数据类型 原型身上的 toString 方法 都被根据使用场景 而重写了 （重写赋值了一个新函数 功能不一样了）

// Array.prototype.toString == Object.prototype.toString ==> false 他俩不一样

// 而 这里的实现是 通过 call 方法 改变了 this 指向 所以是 传入的参数 借用了 Object 原型 身上的 最原始的 toString 方法

// 所以 得以实现 精确获取数据类型的功能

// 例如 字符串 数字 布尔值 数组 对象 函数 

let str = '123'
let num = 123
let flag = true
console.log(flag.toString())
let arr = [1, 2, 3]
let obj = {}
let fn = function () { }
let regxep = /\1-3/

console.log(str.toString())
// 字符串 => '123'
getType(str)
// 字符串 => '[object String]'

console.log(num.toString())
// 数字 => '123'
getType(num)
// 数字 => '[object Number]'

console.log(flag.toString())
// 布尔值 => 'true'
getType(flag)
// 布尔值 => '[object Number]'

console.log(obj.toString())
// 对象 => '[object Object]'
getType(obj)
// 对象 => '[object Object]'

console.log(arr.toString())
// 数组 => '1,2,3'
getType(arr)
// 数组 => '[object Array]'

fn.toString()
// 函数 => 'function () { }'
getType(fn)
// 函数 => '[object Function]'

console.log(regxep.toString())
// 正则 => '/\\1-3/'
getType(regxep)
// 正则 => '[object RegExp]'


// 这里方便演示 做了封装
function getType(type) {
  console.log(Object.prototype.toString.call(type))
}