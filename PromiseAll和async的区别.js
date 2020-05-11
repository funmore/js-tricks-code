let p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log('p1 is arrived')
        res('p1 is arrived data')
    },1000)
})

let p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log('p2 is arrived')
        res('p2 is arrived data')
    },1000)
})

let p3 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log('p3 is arrived')
        res('p3 is arrived data')
    },1000)
})

const a = Promise.all([p1,p2,p3]);
// const [
//     detailResponse,
//     timelineResponse,
//     emMessageResponse
//   ] =  Promise.all([1,2,3])  
//   Promise.all([p1, p2, p3]).then(values => { 
//     console.log(values); // [3, 1337, "foo"] 
//   });
//   let p = Promise.all([p1,p2,p3])

async function runPromiseAll(){
    const [a1,a2,a3] = await Promise.all([p1,p2,p3]).then(data=>
        console.log(data)
        )
    const arr = await Promise.all([p1,p2,p3])
    console.log(a1)
    console.log(a2)
    console.log(a3)
    return 123
}
let run = runPromiseAll()
run.then(data=>{
    console.log(data)
})