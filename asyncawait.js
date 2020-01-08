async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

 function async2() {
    console.log("async2");
    // return Promise.resolve();
}

console.log("script start");


async1();


console.log("script end");

