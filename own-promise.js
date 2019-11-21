function Promise(exector){
    let self = this;
    this.status = 'pending';
    this.value =undefined;
    this.reason = undefined;

    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    //if success
    function resolve(value){
        if(self.status ==='pending'){
            self.value = value;
        }
        self.status ="resolved"
        if(self.onResolvedCallbacks.length !=0){
            self.onResolvedCallbacks.forEach(fn=>fn())
            var b=1;
        }else{
            let a =1;
        }
    }

    //if failed
    function reject(reason) {
        if(self.status ==="pending"){
            self.reason = reason;
        }
        self.status ="rejected"
        self.onRejectedCallbacks.forEach(fn => fn())
    }
    try {
        exector(resolve, reject)
    }catch(e){
        reject(e)
    }
} 
Promise.prototype.then = function (onFulfilled, onRejected){
    let self = this;
    let promise2 = new Promise((resolve, reject)=>{
        function resolvePromise(promise2,x,resolve, reject){
            if(promise2 === x){
                return reject(new TypeError("chaining cycle"))
            }
            let called;
            if(x!=null && (typeof x==='object'||typeof x === 'function')){
                try {
                    let then =x.then;
                    if(typeof then ==='function'){
                        then.call(x,y=>{
                            if(called) return;
                            called = true;
                            resolvePromise(promise2, y, resolve, reject)
                        },err=>{
                            if(called) return;
                            called=true;
                            reject(err)
                        })
                    }else{
                        resolve(x);
                    }
                }catch(e){
                    if(called) return;
                    called=true;
                    reject(e)
                }
            }else{
                resolve(x)
            }
        }

        if(this.status ==='resolved'){
            try{
                let x = onFulfilled(self.value)
                resolvePromise(promise2, x,resolve,reject)
            }catch(e){
                reject(e)
            }
            
        }
        if(this.status ==="rejected"){
            try {
               let x = onRejected(self.value);
               resolvePromise(promise2, x,resolve,reject)
            }catch(e){
                reject(e)
            }
            
        }
        if(this.status ==="pending"){
            this.onResolvedCallbacks .push(()=>{
                try{
                    let x = onFulfilled(self.value)
                    resolvePromise(promise2, x,resolve,reject)
                }catch(e){
                    reject(e)
                }
            })
    
            this.onRejectedCallbacks.push(()=>{
                try {
                    let x = onRejected(self.value);
                    resolvePromise(promise2, x,resolve,reject)
                 }catch(e){
                     reject(e)
                 }
            })
        }
    })
    return promise2;

}
let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('success')
        // if(Math.random()>0.5){
        //     resolve('success')
        // }else{
        //     reject('error')
        // }
    },2000)
})

promise.then((data)=>{
    return new Promise((resolve,reject)=>{
        console.log("first")
        resolve("then success")
    })
},err => {
    console.log(err)
})
// .then(data=>{
//     console.log("second")
// }).then(data=>{
//     console.log("third")
// })

