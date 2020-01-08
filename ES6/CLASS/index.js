//es 6 继承 start
// class Person {
//     constructor(body) {
//         this.body = body
//     }
// }

// class Chinese extends Person {
//     constructor(name, body) {
//         super(body)
//         this.name = name;
//     }
// }
// var chinese1 = new Chinese('funmore', 'hunman body')

//es 6 继承 end


// //寄生组合继承 start
// funciton Cat(name){
//     Animal.call(this)
//     this.name = name || 'funmore'
// }
// (function () {
//     var Super = function () { };
//     Super.prototype = Animal.prototype;
//     Cat.prototype = new Super();
// })();

// //寄生组合继承  end

//构造继承 start
function Person(body){
    this.body=body
}
function Chinese(name,body){
    Person.call(this,body)
    this.name=name;
}
var a =new Chinese('funmore','human')

//构造继承 start

//实例继承 start
function Person(body){
    this.body=body
}
function Chinese(name,body){
    var ins= new Person(body)
    ins.name=name
    return ins
}
var a =new Chinese('funmore','human')

//实例继承 start

//构造继承  end





console.log('end')