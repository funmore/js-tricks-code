async function func1(){
    console.log('1_before')
    await func2()
    // await funconce();
    console.log('1_after')
}
function funconce(){
    console.log('once')
}
async function func2(){
    console.log('2_before')
    await func3()
    console.log('2_after')
}
async function func3(){
    console.log('3_inner')
}

func1();
var a = new Promise((res,rej)=>{
    console.log('promise inn')
    res()
})
a.then(()=>{
    console.log('promise then')
})
console.log('outter')

// 1_before
// 2_before
// 3_inner
// promise inn
// outter
// promise then
// 2_after
// 1_after