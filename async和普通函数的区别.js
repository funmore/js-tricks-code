function fn(params){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('2000结束'+ '  '+ params)
            res('2000结束data'+ '  '+ params)
        },2000)
    })
}

// fn('first1').then((data)=>console.log(data))
// fn('first2').then((data)=>console.log(data))


function wrapper1 (params){
    return fn(params)
}
async function wrapper2(params){
    return fn(params)
}

// wrapper1()('1').then((data)=>console.log(data))
// wrapper2().then((data)=>data())
// console.log(Object.prototype.toString.call(wrapper1))
// console.log(Object.prototype.toString.call(wrapper2))
var w1 = wrapper1('1')

var w2 = wrapper2('2')

w2.then((data)=>console.log(data))
w1.then((data)=>console.log(data))


// function wrapper1_normal (params){
//     return params
// }
// async function wrapper2_normal(params){
//     return params
// }
// let a = wrapper1_normal(1);
// let b = wrapper2_normal(2)

// console.log(a)
// console.log(b)
// b.then((data)=>console.log(data))