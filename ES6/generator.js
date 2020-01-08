
// function * generatorLoops(num){
//     for(let i = 0; i< num ; i ++){
//         yield console.log(i)
//     }
// }
// const gen = generatorLoops(8);
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();

// gen.next();
// gen.next();

function * withYield(a){
    yield 5;
}
const w = withYield(5);
var a =w.next().value;
a=w.next().value;
a=w.next().value;
a=w.next().value;

// //async 无论如何都会返回一个promise
// //await函数会立即执行,并会阻塞下面的代码
// async function inner(){
//     console.log('inner')
//     Selection()
//     return 'inner'
// }
// function inner2(){
//     return 'inner2'
// }

// async function play(){
//     const v1 = await inner();
//     const v2 = await inner2()
//     console.log('down await')
//     return v1;
// }
// play().then((v)=>{
//     console.log(v)
// })