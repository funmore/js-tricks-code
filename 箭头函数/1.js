// var obj ={
//     f1:function func(){
//         console.log('f1')
//         console.log(this)
//     },
//     f2: function (){
//         console.log('f2')
//         console.log(this)
//     },
//     f3: ()=>{
//         console.log('f3')
//         console.log(this);
//     }
// }
// var obj1={a:1,b:2}
// obj.f1();
// obj.f2();
// obj.f3();
// obj.f1.call(obj1)
// obj.f2.call(obj1)
// obj.f3.call(obj1)


// (function foo(){
//     var a = 10;
//     console.log(a);
//   })();
var obj={
    a:1,
    b:2
}
var func = function func (){
    console.log(this)
}
var func1 =()=>{
    console.log(this);
}
(()=>{
    console.log('func');
    console.log(this)
}).call(obj)
func1.call(obj)
func.call(obj)

var obj1={
    func1:()=>{
        console.log(this);
    }
}
obj1.func1.call(obj)
obj1.func1();