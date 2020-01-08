// var obj={
//     a:1,
//     b:2
// }
// console.log(obj['a'])
// var val='funmore plus'
// Object.defineProperty(obj,'a',{
//     enumerable:true,
//     configurable:true,
//     value:'funmore',
//     // get:function(){
//     //     return undefined
//     // },
//     // set: function(newVal){
//     //     // val = newVal;
//     // }
// })

// console.log(obj['a'])
// obj.a='yanglili'
// console.log()


const arr = [1,2,3];

let val = arr[0];

Object.defineProperty(arr,'0',{
    enumerable: true,
    configurable: true,
    get(){
        doSomething();
        return val;
    },
    set(a){
        val = a;
        doSomething();
    }
});

function doSomething() {
    console.log('12312')
}

arr[0]='1231'
console.log()