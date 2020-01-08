function Dog(){
    this.name='f'
}
Dog.prototype.do=function(){

}
var dog1 = new  Dog();
console.log(dog1.__proto__== Dog.prototype)
console.log(dog1.__proto__.__proto__== Dog.prototype.__proto__)
console.log(dog1.__proto__.hasOwnProperty('do'))
console.log(dog1.__proto__.hasOwnProperty('hasOwnProperty'))
console.log(dog1.__proto__.__proto__)
console.log(Dog.__proto__)
console.log(dog1.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))



// true
// 2 原型链.js:8
// true
// 2 原型链.js:9
// true
// 2 原型链.js:10
// false
// 2 原型链.js:11
// Object {constructor: , __defineGetter__: , __defineSetter__: , hasOwnProperty: , __lookupGetter__: , …}
// 2 原型链.js:12
// function () { … }
// 2 原型链.js:13
// true