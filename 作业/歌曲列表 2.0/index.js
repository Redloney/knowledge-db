var data = [
  {
    id: 0,
    title: "残酷月光 - 费启鸣",
    checked: true, // 是否默认选中
    collect: true, //是否收藏 true 收藏 false 没有收藏
  },
  {
    id: 1,
    title: "兄弟 - 艾热",
    checked: false,
    collect: false,
  },
  {
    id: 2,
    title: "毕生 - 夏增祥",
    checked: false,
    collect: true,
  },
  {
    id: 3,
    title: "公子向北去 - 李春花",
    checked: false,
    collect: false,
  },
  {
    id: 4,
    title: "战场 - 沙漠五子",
    checked: true, // 是否默认选中
    collect: false, //是否收藏 true 收藏 false 没有收藏
  },
];

const ul = document.querySelector('#list')
const checkAll = document.querySelector("#checkAll")
const newInfo = document.querySelector("#newInfo")
const footer = document.querySelector('.footer')

footer.addEventListener('click', (e) => {
  if (e.target == footer) return
  let action = e.target.id
  switch (action) {
    case 'remove':
      data = data.filter(({ checked }) => !checked)
      break;
    case 'add':
      if (!newInfo.value) return alert('请收入内容再添加！')
      let title = newInfo.value
      newInfo.value = ''
      data.push({ id: data.length, title, checked: false, collect: false })
    default:
      console.log('default')
      break;
  }
  renderDOM(data)
})

// 全选
checkAll.addEventListener('click', e => {
  data.forEach(item => item.checked = e.target.checked)
  renderDOM(data)
})

const renderDOM = list => {
  ul.innerHTML = ''
  // 创建文档碎片
  const fargment = document.createDocumentFragment()

  // 遍历数据
  list.forEach(({ id, title, collect, checked }, index) => {

    // 创建 DOM
    const li = document.createElement('li')

    li.addEventListener('click', e => {
      if (e.target === li) return
      const action = e.target.attributes['data-action'].value

      switch (action) {
        case 'check':
          data[index].checked = !checked
          break;
        case 'collect':
          data[index].collect = !collect
          break;
        case 'remove':
          data.splice(index, 1)
          // data = data.filter((item) => item.id !== id)
          break;
      }
      checkAll.checked = data.length > 0 && data.every(({ checked }) => checked)
      renderDOM(data)
    })

    li.innerHTML =
      `
      <input data-action='check' type="checkbox" ${checked ? 'checked' : ''} id="inputone" />
      <span>${title}</span>
      <a href="javascript:;" data-action='collect' class="${collect ? 'cancelCollect' : 'collect'}">
        ${collect ? '取消收藏' : '收藏'}
      </a>
      <a data-action='remove' href="javascript:;" class="remove">删除</a>
    `
    fargment.appendChild(li)
  })


  ul.appendChild(fargment)

}

// 首次渲染
renderDOM(data)