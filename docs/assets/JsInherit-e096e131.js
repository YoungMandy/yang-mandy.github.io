import{_ as u}from"./PageHeader.vue_vue_type_style_index_0_lang-96e9b784.js";import{d as g,b as a,c as m,e as t,w as i,u as e,f as n,g as _}from"./index-55ce9197.js";const s=`// 1.原型链继承
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
`,l=`// 2. 构造函数继承(在子对象的构造函数内部调用父对象的构造函数)
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
// 缺点: 不能继承方法`,r=`// 3.组合继承(原型链+ 构造函数)
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
`,h=` // 4.原型式继承 (父对象作为构造函数的原型)
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
`,d=`// 5.寄生继承 
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
`,p=`// 6.ES6 的class 继承
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
`,f=n("h2",null,"1.原型链继承",-1),y=n("h2",null,"2.构造函数继承",-1),C=n("h2",null,"3.组合(原型链+ 构造)继承",-1),H=n("p",null," 这个也称作经典继承",-1),j=n("h2",null,"4.原型式继承",-1),x=n("h2",null,"5.寄生式继承",-1),P=n("h2",null,"6.ES6的class继承",-1),I=g({__name:"JsInherit",setup(w){return(S,b)=>{const o=a("highlightjs"),c=a("CopyWrapper");return _(),m("section",null,[t(u,{title:"JS的继承",description:"网上的普遍分类,JS有六种继承方式"}),f,t(c,{msg:e(s)},{default:i(()=>[t(o,{language:"javascript",code:e(s)},null,8,["code"])]),_:1},8,["msg"]),y,t(c,{msg:e(l)},{default:i(()=>[t(o,{language:"javascript",code:e(l)},null,8,["code"])]),_:1},8,["msg"]),C,H,t(c,{msg:e(r)},{default:i(()=>[t(o,{language:"javascript",code:e(r)},null,8,["code"])]),_:1},8,["msg"]),j,t(c,{msg:e(h)},{default:i(()=>[t(o,{language:"javascript",code:e(h)},null,8,["code"])]),_:1},8,["msg"]),x,t(c,{msg:e(d)},{default:i(()=>[t(o,{language:"javascript",code:e(d)},null,8,["code"])]),_:1},8,["msg"]),P,t(c,{msg:e(p)},{default:i(()=>[t(o,{language:"javascript",code:e(p)},null,8,["code"])]),_:1},8,["msg"])])}}});export{I as default};
