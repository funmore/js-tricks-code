var  obj ={
    a:0,
    c:1,
    b:2
}
var avalue= obj.a;
console.log('avalue+ '+avalue)
var bvalue = obj.b;
console.log('bvalue+ '+bvalue)
Object.defineProperty(obj,'a',{
    enumerable:false,
            configurable:false,
            get: function (){
                console.log('a get')
                return avalue;
            },
            set: function (newVal){
                console.log('a set')
                avalue = newVal;
            }
});
Object.defineProperty(obj,'b',{
    enumerable:false,
            configurable:false,
            get: function (){
                console.log('b get')
                return bvalue;
            },
            set: function (newVal){
                console.log('b set')
                bvalue = newVal;
            }
})


obj.a = 12;
obj.b =12;
// obj. = obj.a = 12;
// obj.a = obj =12;
console.log(obj)