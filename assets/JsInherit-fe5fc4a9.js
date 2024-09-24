import{d as m,b as a,c as f,e as y,f as e,g as o,w as r,u as n}from"./index-e7b8c0f0.js";const c=`// 1.原型链继承
function Parent () {
  this.name = 'parent'
}

Parent.prototype.sayHi = function() {
  console.log('hi'+ this.name)
}

function Child () {
  this.name = 'child';
}

Child.prototype = new Parent();

const child = new Child();
child.sayHi();
// 优点:这个最基本的继承方式，通过将一个对象的实例赋值给另一个对象的原型。
// 缺点: 无法传递参数给父对象的构造函数,无法进行属性共享
`,s=`// 2. 构造函数继承(在子对象的构造函数内部调用父对象的构造函数)
function Parent () {
  this.name = 'Parent';
  this.other = 'other';
}

Parent.prototype.sayHi = function() {
  console.log('hi ' + this.name);
}

function Child () {
  Parent.call(this);
  this.name = 'child';
}

const child = new Child();
console.log(child.other);// other
child.sayHi();// TypeError: child.sayHi is not a function
// 优点: 实现了属性的继承
// 缺点: 不能继承方法`,h=`// 3.组合继承(原型链+ 构造函数)
function Parent () {
  this.name = 'parent';
  this.other = 'other';
}

Parent.prototype.sayHi = function() {
  console.log('hi ' + this.name);
}

function Child () {
  Parent.call(this);
  this.name = 'child';
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const child = new Child();
child.sayHi();
console.log(child.other);
// 优点:可以实现属性和方法的继承
// 缺点: 会调用两次父对象的构造函数,有一定的性能开销
`,d=` // 4.原型式继承 (父对象作为构造函数的原型)
function createObject (parent) {
  function F () { }
  F.prototype = parent;
  return new F();
}

const parent = {
  name: 'parent',
  text: {
    other: 'other'
  },
  sayHi: function() {
    console.log('hi ' + this.name);
  }
}

const child = createObject(parent);
child.name = 'child';
console.log(child.name);// child
child.text.other = 'another'
child.sayHi();// hi child
const childB = createObject(parent);
console.log(childB.text.other);// another
console.log(childB.name);// parent

// 优点: 可以简单的复制对象的属性和方法
// 缺点: 父对象的引用属性会被所有子对象共享
`,p=`// 5.寄生继承 
// 在原型式继承的基础上,对继承的对象进行扩展
function createObject (parent) {
  function F () { }
  F.prototype = parent;
  F.prototype.sayHi = function() {
    console.log('Hi',this.name)
  }
  return new F();
}

const parent = {
  name: 'parent',
  other: {
    text:'other'
  }
}
const child = createObject(parent);
console.log(child.name);// parent
console.log(child.other); // { text:'other' }
child.sayHi();// Hi parent
child.other.text = 'another';
const child2 = createObject(parent);
console.log(child2.other.text)// another
// 优点: 可以简单复制对象的属性和方法,并扩展支持
// 缺点: 父对象的引用属性会被子对象所共享
`,u=`// 6.ES6 的class 继承
class Parent {
  constructor () {
    this.name = 'parent';
    this.other = {
      text:'other',
    }
  }
  sayHi () {
    console.log('hi ' + this.name);
  }
}
class Child extends Parent {
  constructor () {
    super();
  }
}

const child = new Child();
child.sayHi();// hi parent
child.other.text = 'other';

const child2 = new Child();
console.log(child2.other.text);// other
// 优点:实现了父对象的属性和方法的继承且子对象不会改动到父对象的引用属性
// 推荐: ES6的class > 组合式 > 其他
`,x=m({__name:"JsInherit",setup(C){return(H,t)=>{const g=a("page-header"),i=a("highlightjs"),l=a("CopyWrapper");return f(),y("section",null,[e(g,{title:"JS的继承",description:"网上的普遍分类,JS有六种继承方式"}),t[0]||(t[0]=o("h2",null,"1.原型链继承",-1)),e(l,{msg:n(c)},{default:r(()=>[e(i,{language:"javascript",code:n(c)},null,8,["code"])]),_:1},8,["msg"]),t[1]||(t[1]=o("h2",null,"2.构造函数继承",-1)),e(l,{msg:n(s)},{default:r(()=>[e(i,{language:"javascript",code:n(s)},null,8,["code"])]),_:1},8,["msg"]),t[2]||(t[2]=o("h2",null,"3.组合(原型链+ 构造)继承",-1)),t[3]||(t[3]=o("p",null," 这个也称作经典继承",-1)),e(l,{msg:n(h)},{default:r(()=>[e(i,{language:"javascript",code:n(h)},null,8,["code"])]),_:1},8,["msg"]),t[4]||(t[4]=o("h2",null,"4.原型式继承",-1)),e(l,{msg:n(d)},{default:r(()=>[e(i,{language:"javascript",code:n(d)},null,8,["code"])]),_:1},8,["msg"]),t[5]||(t[5]=o("h2",null,"5.寄生式继承",-1)),e(l,{msg:n(p)},{default:r(()=>[e(i,{language:"javascript",code:n(p)},null,8,["code"])]),_:1},8,["msg"]),t[6]||(t[6]=o("h2",null,"6.ES6的class继承",-1)),e(l,{msg:n(u)},{default:r(()=>[e(i,{language:"javascript",code:n(u)},null,8,["code"])]),_:1},8,["msg"])])}}});export{x as default};
