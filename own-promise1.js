function Promise1(exe,sign){
    var self = this
    this.value = null
    this.reason = null
    this.status = 'pending'
    this.sign = sign

    this.resolveCallbacks = []
    this.rejctedCallbacks = []

    function resolve(value){
        if(self.status === 'pending'){
            self.value = value
        }
        self.status = 'resolved'
        if(self.resolveCallbacks.length != 0){
            self.resolveCallbacks.forEach(fn => {
                fn()
            });
        }
    }
    function reject(reason){
        if(self.status = 'pending'){
            self.reason =  reason
        }
        self.status = 'rejected'
        if(self.rejctedCallbacks.length != 0){
            self.rejctedCallbacks.forEach(fn=>{
                fn()
            })
        }
    }

    try{
        exe(resolve,reject)
    }catch(e){
        reject(e)
    }
}
var thencount=0;
Promise1.prototype.then = function(onFulFilled , onRejected){
    var self = this
    thencount++;
    var promise2 = new Promise1((resovle , reject)=>{
        //resovelPromise的主要作用是把then里面的所有的内容都resolve掉，并执行本then的返回的prmoise的then挂在函数
        function resovlePromise(promise2, x, resovle,reject){
            if(promise2 === x){
                return reject(new TypeError("chaining cycle"))
            }
            if(x != null && (typeof x === 'object' || typeof x === 'function')){
                try{
                    if(x.then != null && typeof x.then ==='function'){
                        x.then.call(x,resovle1=>{
                            resovlePromise(promise2,resovle1,resovle,reject)
                        },reject1=>{
                            reject(reject1)
                        })
                    }
                }catch(e){
                    reject(e)
                }
            }else{
                resovle(x)
            }

        }        
        if(this.status === 'resolved'){
            try{
                let x = onFulFilled(self.value)
                resovlePromise(promise2,x,resovle,reject)
            }catch(e){
                reject(e)
            }
        }
        if(this.status === 'rejected'){
            try{
                let x = onRejected(self.value)
                resovlePromise(promise2,x,resovle,reject)
            }catch(e){
                reject(e)
            }
        }
        if(this.status === 'pending'){
            this.resolveCallbacks.push(()=>{
                try{
                    let x = onFulFilled(self.value)
                    resovlePromise(promise2,x,resovle,reject)
                }catch(e){
                    reject(e)
                }

            })
            this.rejctedCallbacks.push(()=>{
                try{
                    let x = onRejected(self.value)
                    resovlePromise(promise2,x,resovle,reject)
                }catch(e){
                    reject(e)
                }
            })
        }
    },('thencount: '+thencount))
    return promise2
}
// var a = new Promise1((resolve , reject)=>{
//     setTimeout(()=>{
//         let ret = countFunc()
//         resolve(ret)
//     },2000)
// },'promise1')
// a.then(value=>{
//     return new Promise1((resovle,reject)=>{
//         let ret = countFunc()
//         resovle(ret)
//     },'then inside 1')
// },reason=>{

// })

var count=0;
function countFunc(){
    count++
    let value= 'promise1 success! count: ' +count
    console.log(value)
    return value
}

Promise1.all= function (promiseArr){
    return new Promise1((resovle,reject)=>{
        var resovleValue=null
        var count=0
        function decideResovle(value){
            resovleValue = resovleValue +'/'+value
            count++
            if(count===promiseArr.length){
                console.log(resovleValue)
                resovle(resovleValue)
            }             
        }
        for(let i=0;i<promiseArr.length;i++){
            try{
                promiseArr[i].then(value=>{
                    decideResovle(value)
                },reason=>{
                    reject(reason)
                })
            }catch(e){
                reject(e)
            }
        }
    })
}

Promise1.race = function(promiseArr){
    return new Promise1((resolve,reject)=>{
        for(let i=0;i<promiseArr.length;i++){
            try{
                promiseArr[i].then(value=>{
                    resolve(value)
                },reason=>{
                    reject(reason)
                })
            }catch(e){
                reject(e)
            }
        }
    })
}

// var a = new Promise1((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log('a falid')
//             reject('a')
//     },1000)
// },'promise-a')

// var b = new Promise1((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve('b')
//     },2000)
// },'promise-b')

// var c = new Promise1((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve('c')
//     },3000)
// },'promise-c')

// Promise1.all([a,b,c])



var a = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('a falid')
        reject('a')
    },1000)
}).then((v)=>{console.log(v)})


var b = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('b')
    },2000)
})

var c = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('c')
    },3000)
})

// const reflect = 
// p => p.then(v => ({
//     v, status: "fulfilled" 
// }),e => ({
//     e, status: "rejected" 
// }))
var promiseArr = [a,b,c]
const errorCatch = promiseArr.map(p=>p.then(value=>{return {status:'resolved',data:value}})
                                      .catch(reason=>{return {status:'rejected',data:reason}}))



const reflect =(p)=>p.then((value=>{
    return {value, status:'fufile'}
}),(reason=>{
    return {reason, status:'rejected'}
}))

let arr1= [a,b,c].map(reflect)

// Promise.all(errorCatch).then(function(results){
//     // var success = results.filter(x => x.status === "fulfilled");
//     // console.log(s)
//     console.log(results)
// }).catch(reason=>{
//     console.log(reason)
// });
Promise.allMy= function (promiseArr){
    var newpromiseArr = promiseArr.map(p=>p.then(value=>{return {status:'resolved',data:value}})
                                      .catch(reason=>{return {status:'rejected',data:reason}}))
    return new Promise((resovle,reject)=>{
        var resovleValue=[]
        var count=0
        var length= newpromiseArr.length
        function decideResovle(value){
            resovleValue.push(value)
            count++
            if(count===length){
                resovle(resovleValue)
            }             
        }
        for(let i=0;i<length;i++){
            try{
                newpromiseArr[i].then(value=>{
                    decideResovle(value)
                },reason=>{
                    reject(reason)
                })
            }catch(e){
                reject(e)
            }
        }
    })
}

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
                    resovle(arg)
                },arg)
            })
            p.then(value=>{
                decideResovle(value)
                let waitinghead= waitinglist.shift()
                run(waitinghead)
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
var limitp=Promise.allMyLimit([1000,500,1500,2000,500],3)
limitp.then((value)=>{console.log(value)})


// Promise.allMy(errorCatch).then(function(results){
//     // var success = results.filter(x => x.status === "fulfilled");
//     // console.log(s)
//     console.log(results)
// }).catch(reason=>{
//     console.log(reason)
// });
Promise.allMy(promiseArr).then((value)=>{
    console.log(value)
},(reason)=>{
    console.log(reason)
})
// Promise.prototype.allLimit= function(PromiseArr,limit){

// }
var a1 = Promise.resolve(123)
a1.then((value)=>{
    console.log(value)
})
console.log(a1)

Promise.allLimit = function(arr, wrap, limit, callback) {
    return new Promise((resolve, reject) => {
      var total = arr.length;
      var result = new Array(total);
      var rejected = false;
      var dones = 0;
      function run(n) {
        setTimeout(() => {
          wrap(n, arr.shift()).then(res => {
            return typeof callback === 'function' ? callback(n, res) : Promise.resolve(res);
          }).then(res => {
            dones++;
            result[n] = res;
            if (!rejected) {
              if (arr.length) {
                run(total - arr.length);
              } else if (dones === total) {
                resolve(result);
              }
            }
          }).catch(err => {
            rejected = true;
            reject(err);
          });
        }, 0);
      }
      arr.slice(0, limit).forEach((v, n) => {
        run(n);
      });
    });
  };
