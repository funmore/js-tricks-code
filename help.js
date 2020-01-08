function funmore(arg1,arg2,cb){
    this.arg1 = arg1
    this.arg2 = arg2
    cb()
}
funmore.prototype.then=function(){
    console.log(this)
    var a_new= new funmore(3,4,()=>{
        var self = this
    })
}
var b=1
var f1= new funmore(1,2,()=>{
    console.log(this.arg1)
    console.log(this.arg2)
})
f1.then()
