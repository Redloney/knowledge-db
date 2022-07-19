function parent () {
  this.a = 1;
  this.b = [1, 2, this.a];
  this.c = {
    demo: 5
  }
  this.show = function () {
    console.log(this.a, this.b, this.c.demo)
  }
  this.change = function () {
    this.a = this.b.length;
    this.c.demo = this.a++;
  }
}

var parent = new parent()

// var obj = {
//   a: 1,
//   b: [1, 2, 1],
//   c: {
//     demo: 5
//   },
//   show () {
//     // 1,[1,2,1],5
//   },
//   change () {
//     // a == 3
//     // c.demo = 3
//   }
// }



parent.change()

parent.show()

Array.prototype

// 3,[1,2,1],3