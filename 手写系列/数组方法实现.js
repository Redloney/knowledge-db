let arr = [{ name: '小明', age: 18 }, 'Hello World ~', 100, null, undefined]

// forEach 实现
Array.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

// map 实现
Array.prototype.map = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    let res = callback(this[i], i, this)
    result.push(res)
  }
  return result
}

// every 实现
Array.prototype.every = function (callback) {
  if (this.length < 1) return true
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) return false
  }
  return true
}

// some 实现
Array.prototype.some = function (callback) {
  if (this.length < 1) return false
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return true
  }
  return false
}

// concat
Array.prototype.concat = function (...args) {
  return [...this, ...args].flat()
}

// find
Array.prototype.find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i]
    }
  }
}

// findIndex
Array.prototype.findIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i
    }
  }
}


// filter
Array.prototype.filter = function (callback) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}



// reverse
Array.prototype.reverse = function () {
  let arr = []
  for (let i = this.length - 1; i >= 0; i--) {
    arr.push(this[i])
  }
  return [...arr]
}

// keys
Array.prototype.keys = function () {
  let keys = []
  for (const key in this) { keys.push(key) }
  return keys
}

// values
Array.prototype.keys = function () {
  let values = []
  for (const key of this) { values.push(key) }
  return values
}
