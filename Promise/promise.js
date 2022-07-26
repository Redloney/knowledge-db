export const PromiseAll = (list) => {
  // 返回一个 Promise 实例
  return new Promise((resolve, reject) => {
    // 存储实例返回结果
    const result = []
    // 处理所有实例
    for (let i = 0; i < list.length; i++) {
      list[i].then((value) => {
        result[i] = value
        // 如果所有实例处理完成
        if (result.length === list.length) {
          // 返回处理结果（数组）
          resolve(result)
        }
      }, reject)
    }
  })
}

export const PromiseRace = (list) => {
  return new Promise((resolve, reject) => {
    list.forEach(p => {
      p.then(res => {
        resolve(res)
      }, reject)
    });
  })
}

export const PromiseAny = (list) => {
  let failed = 0
  return new Promise((resolve, reject) => {
    list.forEach(p => {
      p.then(res => {
        resolve(res)
      }, err => {
        failed++
        if (failed === list.length) {
          reject('全部失败 ~')
        }
      })
    })
  })
}

// 和 Promise.all 不同
// Promise.allSettled 即使是遇到 rejection 
// 也会等待所有的 promise 到最后 
// 所以我们只需要用一个 array 记录各个 promise 的 
// fulfill 或者 reject 结果即可

export const allSettled = (list) => {
  return new Promise((resolve, reject) => {
    let result = []
    const fulfilled = 'fulfilled'
    const rejected = '"rejected"'
    list.forEach(p => {
      p.then(value => {
        result.push({
          status: fulfilled,
          value
        })
        if (result.length === list.length) {
          resolve(result)
        }
      }, err => {
        result.push({
          status: rejected,
          reson: err
        })
        if (result.length === list.length) {
          resolve(result)
        }
      })
    })
  })
}