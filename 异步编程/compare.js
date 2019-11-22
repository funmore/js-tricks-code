setTimeout(function(){
    console.log('settime out')
}
)

var a =new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('promise resolve')
        // setTimeout(() => {
        //     console.log('inside promise happend')
        // })
        var insideP=new Promise((resolve,reject)=>{ 
            console.log('inside promise of promise '); 
            resolve('inside promise of promise  then')})
        insideP.then(data=>{
            console.log(data)
        })
        resolve('then data')

    })

})
a.then(data=>{
    console.log(data)
})




// setTimeout(()=>{
//     console.log('settime out  happening')
// })

// var p1= new Promise((resovle,reject)=>{
//     console.log('promise happening')
//     resovle('then data')
// })
// p1.then((data)=>{
//     console.log(data)
// })
