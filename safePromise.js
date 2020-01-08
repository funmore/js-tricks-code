

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
                    if(arg==500){
                        r1(arg)
                    }else{
                        r2(arg)
                    }
                },arg)
            })
            p.then(value=>{
                decideResovle({status:'resovled',value:value})
                if(waitinglist.length!=0){
                    let waitinghead= waitinglist.shift() 
                    run(waitinghead)
                    console.log('run :'+  waitinghead)
                }
            },reason=>{
                decideResovle({status:'rejected',value:reason})
                if(waitinglist.length!=0){
                    let waitinghead= waitinglist.shift()
                    run(waitinghead)
                }
            })
        }
        executinglist = argsArr.slice(0,limit);
        waitinglist = argsArr.slice(limit,argsArr.length)
        executinglist.forEach((arg,index)=>{
            run(arg,index)
        })
    })
}
var limitp=Promise.allMyLimit([1000,500,1500,2000,500],3)
limitp.then((value)=>{console.log(value)})