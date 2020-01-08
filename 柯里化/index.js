// var add = function(x) {
//     return function(y) {
//         return function(z) {
//         return x + y + z;
//       }
//     }
//   }
  
//   var addOne = add(1);
//   var addOneAndTwo = addOne(2);
//   var addOneAndTwoAndThree = addOneAndTwo(3);
  
//   console.log(addOneAndTwoAndThree);


//   var add = function addfunc(fn){
//       var args =arguments;
//       console.log(123);

//   }

// var outer0 =()=>{
//     add();
// }
// outer0();

// function outer1(){
//     add();
// }
// outer1()
var cost = (function() {
    var money = 0;
    return function() {
      for (var i = 0; i < arguments.length; i++) {
        money += arguments[i];
      }
      return money;
    }
  })();

var currying = function(fn) {
    var args = [];
  
    return function() {
      if (arguments.length === 0) {
        return fn.apply(this, args); // 没传参数时，调用这个函数
      } else {
        Array.prototype.push.apply(args, arguments); // 传入了参数，把参数保存下来  利用了
        // return arguments.callee; // 返回这个函数的引用
      }
    }
  }


// var cost = currying(cost);
// cost(100); // 传入了参数，不真正求值
// cost(200); // 传入了参数，不真正求值
// cost(300); // 传入了参数，不真正求值
// // cost(100).cost(200).cost(300);

// console.log(cost()); // 求值并且输出600

var currying1 = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
  
    return function() {
      if (arguments.length === 0) {
        return fn.apply(this, args); // 没传参数时，调用这个函数
      } else {
        [].push.apply(args, arguments); // 传入了参数，把参数保存下来
        return arguments.callee; // 返回这个函数的引用
      }
    }
  }

  
  var cost = currying1(cost, 100);
  cost(200); // 传入了参数，不真正求值
  cost(300); // 传入了参数，不真正求值
  
  console.log(cost()); // 求值并且输出600

var currying2 = function (fn){
  var args = Array.prototype.slice.call(arguments,1)
  return function(){
    if(arguments.length===0){
      return fn.apply(this, args); // 没传参数时，调用这个函数
    }else{
      Array.prototype.push.apply(args,arguments);
      // return arguments.callee
    }
  }
}

var cost1 = currying2(cost, 100);
cost1(200); // 传入了参数，不真正求值
cost1(300); // 传入了参数，不真正求值

cost1();
console.log()