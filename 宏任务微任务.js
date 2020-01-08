console.log('start')
setTimeout(()=>{
    console.log('first settimeout ')
},0)
// var a = new Promise((r1,r2)=>{
//     console.log('promise 1')
//     r1('a')
// })
// a.then((v)=>{
//     console.log('promise1 then')
// })

var b = Promise.resolve().then(()=>{
    console.log('promise2 then ')
})