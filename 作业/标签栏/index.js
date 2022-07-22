const Tab = function (root = null, data, config) {
  this.timer = null;

  this.activeIndex = 0;
  this.tabsLength = data.length;

  this.create = function (config = {}) {
    let { toggle = false, autoPlay = false } = config;

    // 创建文档碎片
    this.instance = document.createDocumentFragment();
    // 创建主体
    this.tabs = document.createElement("div");
    // 标签链接
    this.tabs_nav = document.createElement("div");
    // 标签内容
    this.tabs_body = document.createElement("div");

    // 设置
    this.tabs.setAttribute("class", "tabs");
    this.tabs_nav.setAttribute("class", "tabs_nav");
    this.tabs_body.setAttribute("class", "tabs_body");

    // 开启切换按钮
    toggle && this.createToggle();
    // 开启轮播
    autoPlay && this.autoPlay();
  };

  // 渲染函数
  this.render = function (contents) {
    console.log("渲染");

    this.contents = contents;

    this.tabs_nav.innerHTML = "";
    this.tabs_body.innerHTML = "";

    this.contents.forEach((tab) => {
      const nav = document.createElement("div");
      const content = document.createElement("div");

      nav.setAttribute("class", `nav`);
      nav.setAttribute("data-id", tab.id);
      content.setAttribute("class", `content`);

      tab.active && nav.classList.add("active");
      tab.active && content.classList.add("active");

      nav.innerHTML = tab.title;
      content.innerHTML = tab.content;

      this.tabs_nav.appendChild(nav);
      this.tabs_body.appendChild(content);

      // 切换标签
      this.tabs_nav.onclick = (e) => {
        if (e.target === this.tabs_nav) return;
        let _id = e.target.attributes["data-id"].value;
        // 取消之前项
        this.contents.find(({ active }) => active).active = false;
        // 选中点中项
        this.contents.find(({ id }) => id == _id).active = true;
        this.render(this.contents);
      };

      this.tabs.appendChild(this.tabs_nav);
      this.tabs.appendChild(this.tabs_body);
      this.instance.append(this.tabs);
      root.appendChild(this.instance);
    });
  };

  this.createToggle = function () {
    console.log("创建按钮组");

    const fargment = document.createDocumentFragment();

    this.toggle = document.createElement("div");
    this.toggle.setAttribute("class", "toggle");

    this.nextBtn = document.createElement("button");
    this.prevBtn = document.createElement("button");

    this.nextBtn.setAttribute("class", "next");
    this.prevBtn.setAttribute("class", "prev");

    this.nextBtn.innerHTML = "下一页";
    this.prevBtn.innerHTML = "上一页";

    this.prevBtn.onclick = () => this.prev(this.tabs_nav);
    this.nextBtn.onclick = () => this.next(this.tabs_nav);

    fargment.appendChild(this.prevBtn);
    fargment.appendChild(this.nextBtn);
    this.toggle.appendChild(fargment);

    this.tabs.appendChild(this.toggle);
  };

  this.autoPlay = function () {
    console.log("开启轮播");
    this.timer = setInterval(() => {
      this.next();
    }, 1500);
  };

  this.stopPlay = function () {
    console.log("关闭轮播");
    clearInterval(this.timer);
  };

  this.prev = function () {
    this.contents[this.activeIndex].active = false;
    this.activeIndex--;
    if (this.activeIndex < 0) this.activeIndex = this.tabsLength - 1;
    this.contents[this.activeIndex].active = true;
    this.render([...this.contents]);
  };

  this.next = function () {
    this.contents[this.activeIndex].active = false;
    this.activeIndex++;
    if (this.activeIndex >= this.tabsLength) this.activeIndex = 0;
    this.contents[this.activeIndex].active = true;
    this.render([...this.contents]);
  };

  // 初始化
  this.create(config);
  this.render(data);
};
