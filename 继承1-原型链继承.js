//原型链继承

//优点
//1.可以继承父类及父类原型链属性和方法
//2.父类和子类 共享这个实例


//缺点
//无法多继承
// function father(name){
//     this.name = name;
//     this.say = ()=>{
//         console.log(this.name)
//     }
// }
// father.prototype = {
//     fathermethod :function(){
//         console.log('father method: '+this.name)
//     }
// }

// function son(name){
//   this.name = name;
//   this.happy ='yes'
//   this.say =()=>{
//       console.log(this.name)
//   }
// }


// son.prototype = new father('fanxinghua');



// var son1 = new son('funmore1');
// var son2 = new son('funmore2')

// if(son1.__proto__ == son.prototype){
//     console.log('son1.__proto_ ===  son.prototype')
// }
// if(son2.__proto__.constructor === son){
//     console.log('son.__proto__.constructor == son' )
// }


// son1.say();
// son2.say()
// son1.fathermethod();
// son2.fathermethod();
// console.log();
function Father(name){
    this.name= name;
    this.say=()=>{
        console.log('fathers  name '+ this.name)
    }
}
Father.prototype.say =()=>{
    console.log('father prototype '+ this.name)
}

function Son(name){
    this.name = name;
    this.say=()=>{
        console.log('son instance name '+this.name)
    }
}
Son.prototype.say=()=>{
    console.log('son prototytype '+ this.name);
}
//这种方式的本质上把Son.prototype 赋值为 Father类的实例
Son.prototype = new Father('fanxinghua ');


var son1= new Son('fanziqing');
//point to son function innner say function 
son1.say();
//point to son.prototype/ Father 's inner say fucntion 
//son1.__proto__ === Son.prototype === new Father('fanziqing')
son1.__proto__.say();
//point to Fahter's instance.__proto__ 
//son1.__proto__.__proto__ == new Father(‘fanxinghua’)这个引用的的__prototype
son1.__proto__.__proto__.say();
// son1.say();


function dog(name){
    this.name =name;
    this.say=()=>{
        console.log('dog instance is saying: '+ this.name)
    }
}
var dog1 = new dog('wawawaswwawawr odododoop dog');
console.log()




