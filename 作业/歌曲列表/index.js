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

// 封装到极致 ???

// 工具函数

// 获取DOM
const queryTag = (query) => document.querySelector(query) || null;
// 创建DOM
const createTag = (tag, attr = {}) => {
  if (!tag) return;
  let el = document.createElement(tag);
  Object.keys(attr).length > 0 &&
    Object.getOwnPropertyNames(attr).forEach((name) => {
      el[name] = attr[name];
    });
  return el;
};
// 追加标签
const appendChild = (target, el) => {
  if (typeof el == "object" && el instanceof Array)
    el.forEach((el) => target && target.appendChild(el));
  else target && target.appendChild(el);
};

const checkAll = queryTag("#checkAll");
const list = queryTag("#list");
const remove = queryTag("#remove");
const insert = queryTag("#add");

// 添加
insert.onclick = () => {
  let { value } = queryTag("#newInfo");
  if (!value) return alert("请输入内容再添加~");
  data.push({
    id: data.length,
    title: value,
    checked: false,
    collect: false,
  });
  queryTag("#newInfo").value = "";
  render(data);
};

// 删除选中
remove.onclick = () => {
  data = data.filter(({ checked }) => !checked);
  render(data);
};

// 全选
checkAll.onclick = ({ target: { checked } }) => {
  data.forEach((item) => (item.checked = checked));
  render(data);
};

// 勾选
const handelSelect = (id, checked) => {
  data[data.findIndex((item) => item.id == id)].checked = checked;
  render(data);
};

// 收藏
const handelCollect = (id, collect) => {
  data[data.findIndex((item) => item.id == id)].collect = !collect;
  console.log(data[data.findIndex((item) => item.id == id)]);
  render(data);
};

const view = (data) => {
  const fragment = document.createDocumentFragment();
  list.innerHTML = "";
  data.forEach(({ id, title, checked, collect }) => {
    const line = createTag("li", { className: "line", data_id: id });
    appendChild(line, [
      createTag("input", { id: "inputone", type: "checkbox", checked: checked, onchange: (e) => handelSelect(id, e.target.checked) }),
      createTag("span", { innerText: title }),
      createTag("a", { href: "javascript:;", className: collect ? "cancelCollect" : "collect", innerText: collect ? "收藏" : "取消收藏", onclick: (e) => handelCollect(id, collect) }),
      createTag("a", { href: "javascript:;", className: "remove", innerText: "删除", onclick ({ target: { parentElement } }) { parentElement.remove() } }),
    ]);
    appendChild(fragment, line);
    appendChild(list, fragment);
  });
};

// 视图渲染函数
const render = (data) => {
  view(data);
  checkAll.checked = data.length && data.every(({ checked }) => checked);
};

render(data);
