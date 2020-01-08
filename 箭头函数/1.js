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

(()=>{
    console.log('func');
    console.log(this)
}).call({a:1,b:2})
// (function foo(){
//     var a = 10;
//     console.log(a);
//   })();