function countDown(count){
    console.log(count)
    var id=setInterval(() => {
        count--;
        console.log(count)
        if(count==1) {
            clearInterval(id)
        }
    }, 1000);
}
countDown(10)