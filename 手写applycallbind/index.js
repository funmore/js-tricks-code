// Function.prototype.ownCall = function(context, ...args) {
//     context = (typeof context === 'object' ? context : window)
//     // 防止覆盖掉原有属性
//     const key = Symbol()
//     // 这里的this为需要执行的方法
//     context[key] = this
//     // 方法执行
//     const result = context[key](...args)
//     delete context[key]
//     return result
//   }
//   Function.prototype.ownApply = function(context, args) {
//     context = (typeof context === 'object' ? context : window)
//     // 防止覆盖掉原有属性
//     const key = Symbol()
//     // 这里的this为需要执行的方法
//     context[key] = this
//     // 方法执行
//     const result = context[key](...args)
//     delete context[key]
//     return result
//   }
//   Function.prototype.ownBind = function(context) {
//     context = (typeof context === 'object' ? context : window)
//     return (...args)=>{
//       this.call(context, ...args)
//     }
//   }
Function. prototype.ownCall= function(context,...args){
    context = (typeof context == 'object')? context :window;
    const key= Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete key;
    return result
}
Function.prototype.ownApply = function(context,args){
    context = (typeof context == 'object')? context :window;
    const key = Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete key;
    return result;
}

Function.prototype.ownBind = function(context){
    context = (typeof context =='object')? context :window;
    return (...args)=>{
        this.call(context,...args)
    }
}



  function dosomthing(...args)
  {
      console.log(this.name);
  }
  var obj= {
      name:'funmore'
  }
// dosomthing('yanglil')
// dosomthing.call(obj,'yanglil')
// dosomthing.ownCall(obj,'yanglli','31312')
// dosomthing.ownApply(obj,['yanglli','31312'])
// var bindone = dosomthing.ownBind(obj);
// bindone();

// dosomthing.ownCall('yanglili')

var obj1={
    name:'jay chou'
}
obj1['please'] = dosomthing;
obj1['please']('dfdf')


function dobind(name,height,width){
    this.name = name;
    this.height =height;
    this.width = width
}

var obj={
    name:'funmore',
    height:12,
    width:1232
}
var bind1 = dobind.bind(obj,'yanglili');
bind1()
