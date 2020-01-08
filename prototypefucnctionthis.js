// function dog(name){
//     this.name =name;
// }

// dog.prototype.say0=()=>{
//     console.log(this.name)
// }
// dog.prototype.say1= function(){
//     console.log(this.name)
// }

// dog.prototype={
//     say2:()=>{
//         console.log(this.name)
//     },
//     say3:function(){
//         console.log(this.name)
//     }
// }
// var dog1= new dog('funmore')

// // dog1.say0();
// // dog1.say1();
// dog1.say2();
// dog1.say3();

// console.log();


const obj = {
    a: function() { 
        console.log(this) 
    },
    b: {
    	c: function() {
            console.log(this)
        }
    },
    d:()=>{
        console.log(this)
    },
    e:{
        e1:()=>{
            console.log(this)
        }
    },
    f:{
        f1:function(){
            console.log(this);
            (()=>{
                console.log(this)
            })();
        }
    }
}
// obj.a()  // 打出的是obj对象, 相当于obj.a.call(obj)
// obj.b.c() //打出的是obj.b对象, 相当于obj.b.c.call(obj.b)
// obj.d();
// obj.e.e1();
obj.f.f1();
