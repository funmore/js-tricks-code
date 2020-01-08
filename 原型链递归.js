Object.prototype.a ='object1'
Function.prototype.a = 'Function1'
function myfuc(a){
    this.a = a;
}
var instance = new myfuc('a instance')
console.log(instance.a);
console.log(instance.__proto__);
fuconsole.log(instance.__proto__.a);
console.log(instance.__proto__.__proto__.a)