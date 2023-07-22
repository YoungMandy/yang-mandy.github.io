
export const prototypeChainInheritString =
`// 1.原型链继承
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
`

export const constructorFunctionInheritString =
`// 2. 构造函数继承(在子对象的构造函数内部调用父对象的构造函数)
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
// 缺点: 不能继承方法`

export const combinationInheritString =
`// 3.组合继承(原型链+ 构造函数)
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
`

export const prototypicalInheritanceString =
` // 4.原型式继承 (父对象作为构造函数的原型)
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
`

export const parasiticInheritanceString =
`// 5.寄生继承 
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
`
export const classInheritString =
`// 6.ES6 的class 继承
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
`

