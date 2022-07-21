//  什么是浅拷贝，什么是深拷贝

//  浅拷贝，简单数据类型拷贝的是值，复杂数据类型拷贝的是指针，
//  如果 拷贝之后 复杂数据类型改变了数据，将会对原数据产生影响

// 原因是 被拷贝的值 和拷贝之后的值 保持了同一空间 (堆内存) 的引用

// 深拷贝 ，和浅拷贝同理，
// 但是 复杂数据类型 是重新生成了内存空间，写入了被拷贝的数据

// 原因是 被拷贝的值 和 拷贝之后的值 引用了不用的空间 (堆内存)

// let obj = {
//   name: '张三',
//   age: 18,
//   address: {
//     city: '武汉',
//     ip: '192.168.1.1'
//   },
//   color: ['red', 'black', 'blackpink']
// }

// let obj2 = Object.assign({}, obj)

// obj2.address = '123'
// obj2.color.push('blue')

// console.log(obj2)
// console.log(obj)

// const deepClone = (target) => {
//   if (typeof target !== 'object' || target == null) return target
//   let object = (target instanceof Array) ? [] : {}
//   for (const key in target) {
//     object[key] = deepClone(target[key])
//   }
//   return object
// }

// let obj2 = deepClone(obj)
// obj.color[0] = 'pink'
// obj2.address.city = '上海'

// console.log(obj2)

// console.log(obj)

// 元数据未受影响

let obj = {
  name: '张三',
  age: 18,
  address: {
    city: '武汉',
    ip: '192.168.1.1'
  },
}

let obj2 = { ...obj }

obj2.name = '李四'
obj2.address.city = '上海'

obj.address.ip = '12312312321'

console.log(obj)
console.log(obj2)


// let colors = ['red', 'black', 'blackpink']

// //a sfjalskfjlk

// colors = [...colors, { ...obj }]

// console.log(colors)
