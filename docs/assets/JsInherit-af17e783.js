import{_ as c}from"./PageHeader.vue_vue_type_script_setup_true_lang-87eaae1c.js";import{d as i,b as a,c as l,e as t,u as o,f as e,g as h}from"./index-c2da7195.js";const r=`// 1.原型链继承
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
// 缺点: 不能继承方法`,d=`// 3.组合继承(原型链+ 构造函数)
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
`,p=` // 4.原型式继承 (父对象作为构造函数的原型)
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
`,u=`// 5.寄生继承 
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
`,g=`// 6.ES6 的class 继承
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
`,m=e("h2",null,"1.原型链继承",-1),_=e("h2",null,"2.构造函数继承",-1),y=e("h2",null,"3.组合(原型链+ 构造)继承",-1),f=e("p",null," 这个也称作经典继承",-1),C=e("h2",null,"4.原型式继承",-1),H=e("h2",null,"5.寄生式继承",-1),j=e("h2",null,"6.ES6的class继承",-1),F=i({__name:"JsInherit",setup(x){return(P,S)=>{const n=a("highlightjs");return h(),l("section",null,[t(c,{title:"JS的继承",description:"网上的普遍分类,JS有六种继承方式"}),m,t(n,{language:"javascript",code:o(r)},null,8,["code"]),_,t(n,{language:"javascript",code:o(s)},null,8,["code"]),y,f,t(n,{language:"javascript",code:o(d)},null,8,["code"]),C,t(n,{language:"javascript",code:o(p)},null,8,["code"]),H,t(n,{language:"javascript",code:o(u)},null,8,["code"]),j,t(n,{language:"javascript",code:o(g)},null,8,["code"])])}}});export{F as default};
