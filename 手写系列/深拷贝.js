

let obj = {
  name: '小明',
  color: ['red', 'blue', 'pink']
}

// 1.创建 deep 函数
const dep = function (target) {

  // 2. 判断类型
  if (typeof target !== 'object' || target == null) {
    return target
  }

  let result = null

  // 判断对象是 数组还是对象
  if (target instanceof Array) {
    result = []
  } else {
    result = {}
  }

  // 给克隆对象写入值
  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      // 递归处理每一个键值 没有此步 此函数就是浅拷贝
      result[key] = dep(target[key])
    }
  }

  // 返回
  return result

}

let obj2 = dep(obj)
obj2.color.push('dark')
console.log(obj)
console.log(obj2)

