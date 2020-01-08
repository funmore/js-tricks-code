setTimeout(()=>{
    console.log('settimeout')
},0)
var p1 = new Promise((resovle,reject)=>{
    resovle();
})
p1.then(()=>{
    console.log('then data')
})


Promise.resolve().then(()=>{
    console.log('Promise.resovle')
})


