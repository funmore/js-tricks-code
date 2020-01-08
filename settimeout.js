 
setTimeout(()=>{
    console.log('settime out  happening')
})

var p1= new Promise((resovle,reject)=>{
    console.log('promise happening')
    resovle('then data')
})
p1.then((data)=>{
    console.log(data)
})

//1.promise happening
// data
// setttime out happeing



// setTimeout(()=>{
//     console.log('settime out  happening')
// })

// var p1= new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         console.log('promise happening')
//         resovle('then data')
//     })
// })
// p1.then((data)=>{
//     console.log(data)
// })



// // prmise happding 
// // then data
// // setttim out happending 