// console.log('1')

// setTimeout(() => {
//     console.log('settimeout')
// }, 0);
// Promise.resolve().then(()=>{console.log('p then')}) 
// process.nextTick(()=>{
//     console.log('func2')
// })
// process.nextTick(()=>{
//     console.log('func1')
// })
// process.nextTick(()=>{
//     console.log('func1')
// })
// process.nextTick(()=>{
//     console.log('func1')
// })
// process.nextTick(()=>{
//     console.log('func1')
// })
// process.nextTick(()=>{
//     console.log('func1')
// })
// setImmediate(function(){
//     console.log('immediate')
//    })
// setImmediate(function(){
//     console.log('immediate')
//    })
// console.log('2')


// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)

// setImmediate(() => {
//     console.log('setImmediate')
// })


// setInterval(() => {
//     console.log('setInterval')
//   }, 100)
  
//   process.nextTick(function tick () {
//     process.nextTick(tick)
//   })

// console.log("main stack1")
// setTimeout(() => {
//     console.log('set time out7')
// }, 0);

// setImmediate(function(){
//     console.log('immediate')
//    })
// Promise.resolve().then(()=>{
//     console.log('promise then')
// })

// process.nextTick(()=>{
//     console.log("next tick")
// })

// console.log("main stack3")

// 'use strict' 
// let fs = require('fs')
// fs.readFile('../package.json',()=>{
//     for(var i = 0; i< 10;i++){

//     setTimeout(()=>{
//         console.log('timer')
//     })
//     setImmediate(()=>{
//         console.log('immediate')
//     })
//     }

// })
// for(var i = 0; i< 10;i++){
// setImmediate(()=>{
//     console.log('immediate')
// })

// setTimeout(()=>{
//     console.log('timer')
// })
// }

// for(var i = 0; i< 10;i++){

setTimeout(()=>{
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)
setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

// setTimeout(()=>{
//     console.log('timer1')
//     Promise.resolve().then(function() {
//         console.log('promise1')
//     });
//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })
//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })
// }, 0)
// setTimeout(()=>{
//     console.log('timer2')
//     Promise.resolve().then(function() {
//         console.log('promise2')
//     })
// }, 0)