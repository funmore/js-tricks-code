// // // class Object1{
// // //     constructor(name){
// // //         this.name =name
// // //     }
// // // }
// // // Object1.prototype={
// // //     doSth:function(){
// // //         console.log('doSth: '+this.name)
// // //     }
// // // }
// function Object1(name){
//     this.name = name
// }
// Object1.prototype.doSth=function(){
//     console.log(this.name)
// }
// var a = new Object1('funmore')
// a.doSth()

// var b = Object.create(Object1.prototype)
// b.name='df'
// // b = Object1.call(b,'funmore1')||b
// b.doSth()
// console.log()

// // const car = {
// //     isSportsCar: false,
// //     introduction: function () {
// //       console.log(`Hi girl, this is a ${this.name}. 
// //       Do you like to have a drink with me ? ${this.isSportsCar}`);
// //     }
// //   };
  
// //   var honda = new car();
// //   honda.name='funmore'
// //   honda.isSportsCar =false;
// //   honda.introduction();
// //   const porsche = Object.create(car,{
// //       //color成为porsche的数据属性
// //       color:{
// //           writable:true,
// //           configurable:true,
// //           value:'yellow'
// //       },
// //       //type成为porsche的访问器属性
// //       type:{
// //           // writable、configurable等属性，不显式设置则默认为false
// //           // 想把普通车改成敞篷，成本有点大了，所以就设成不可配置吧
// //           get:function(){return 'convertible'},
// //           set:function(value){"change this car to",value}
// //       }
// //   });
  
// //   porsche.name = "Porsche 911"; // "name"是"porsche"的属性, 而不是"car"的
// //   porsche.isSportsCar = true; // 继承的属性可以被覆写
  
// //   porsche.introduction();
// //   // expected output: "Hi girl, this is a Porsche 911. Do you like to have a drink with me ? true"
  

//   let m = Object.create(null);
//   let n = {};
  
//   // 猜测下，m和n有什么区别呢
//   console.log(m);
//   console.log(n);


var o;
var o1 = Object.create(null);


var o2 = {};
// 以字面量方式创建的空对象就相当于:
var o3 = Object.create(Object.prototype);
console.log()