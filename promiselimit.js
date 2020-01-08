Promise.allMyLimit= function (argsArr,limit){
    return new Promise((resovle,reject)=>{
        var resovleValue=[]
        var count=0
        var length= argsArr.length
        function decideResovle(value){
            resovleValue.push(value)
            count++
            if(count===length){
                resovle(resovleValue)
            }             
        }
        function run(arg){
            var p = new Promise((r1,r2)=>{
                setTimeout(()=>{
                    console.log('时间到： '+arg)
                    r1(arg)
                },arg)
            })
            p.then(value=>{
                decideResovle(value)
                if(waitinglist.length!=0){
                    let waitinghead= waitinglist.shift()
                    console.log("开始跑："+waitinghead)
                    run(waitinghead)
                }
            },reason=>{
                reject(reason)
            })
        }
        executinglist = argsArr.slice(0,limit);
        waitinglist = argsArr.slice(limit,argsArr.length)
        executinglist.forEach((arg,index)=>{
            run(arg,index)
        })
    })
}
var limitp=Promise.allMyLimit([1000,500,1500,2000,600],3)
limitp.then((value)=>{
    console.log("limip then: "+value)
})