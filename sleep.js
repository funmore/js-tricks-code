// async function sleep(time){
//     await sleepfuc(time);
//     console.log('sleep');
//     return null
// }; 
// function sleepfuc(time){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res();
//             console.log('sleepfuc')
//         }, time);
//     })
// }

// var a =1;
// sleep(1000);
// var b =2;
// console.log('b')


// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }
  
// //   console.log('a')
//   (async function() {
//     // console.log('Do some thing, ' + new Date());
//     await sleep(3000);
//     // console.log('Do other things, ' + new Date());
//   })();
//   console.log('b')

function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
  }
  async function test(){
    var temple=await sleep(1000);
    console.log(1111)
    return temple
  }
  test();
  //延迟1000ms输出了1111
  console.log('end')
 