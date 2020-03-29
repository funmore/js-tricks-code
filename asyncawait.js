//1. async 函数返回一个Promise 
//2. await 函
//   2.1 在async函数内返回值
//      a) 返回值不需要指定var let const  直接指定 如p2
//      b) 如果await函数是一个async function return promise p2的值为res或者rej的data
//      c）如果await 函数是一个async function return 常数    p2的值为return data
//      d) 如果await 函数是一个function return promise  p2的值为return data
//      e) 如果await 函数是一个function return 常数  p2的值为return data 
//
//
//
//
async function async1() {
    // console.log("async1 start");
    // p2 = await async2();
    // console.log("async1 end");
    // return Promise.reject('123')
    try {
        p3 = await Promise.reject('p3 reject')
    } catch (error) {
        console.log(error);
    }
    p2 = await async2();
    return p2
}

async function async2() {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('async2');
        },0)
    })
    // return Promise.resolve();
    // return 12;
}

console.log("script start");


var p1 = async1();
p1.then((data)=>{
    console.log('p1 '+p1)
    console.log('data '+data)
})
p1.catch((data)=>{
    console.log('p1 '+p1)
    console.log('data '+data)
})


console.log("script end");

