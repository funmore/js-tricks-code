// 寄生组合继承的好处
// 1.构造组着继承会存在超类被执行2次问题
// 2.寄生组合继承将超类的构造函数和prototype 分开，
//     2.1 超类的构造函数被用在new子类过程中使用call方法实现对超类属性的挂载
//     2.2 超类的prototype里的内容通过inherit函数里将此prototype作为子类的prototype的主内容进行挂载，同时将子类的prototype需要挂载本身的构造函数


// function father(name,type){
//     this.name= name;
//     this.type = type;
//     this.height = '177';
//     this.fathersay0 =()=>{
//         console.log('fahter intsntace is '+ this.height)
//     }
// }
// father.prototype.fathersay1=()=>{
//     console.log('fahter proto is '+ this.type)
// }

// function son (name,age,type){
//     father.call(this,name,type);
//     this.name =name;
//     this.age = age;
//     this.say= ()=>{
//         console.log('son intsntace is '+ this.height)
//     }
// }
// son.prototype.say=()=>{
//     console.log('son intsntace is '+ this.name)
// }

// !(function inherit(subType, superType){
//     var prototype = superType.prototype;
//     prototype.constructor = subType;
//     subType.prototype = prototype;
// })(son,father)
// // inherit(son,father)

// var son1 = new son('fanziqing','27','male')
// console.log();


function father(name,type){
    this.name = name;
    this.type = type;
    this.fatherinssay= ()=>{
        console.log('father instance say')
    }
}
father .prototype .fathersay = ()=>{
    console.log('fahter prototype say')
}


function son (name){
    father.call(this,name+' father' ,'father type')
    this.name = name;
    this.say =()=>{
        console.log('son instance say')
    }
}
son.prototype.sonsay=()=>{
    console.log('son proto say')
}

(function inherit(sonType, fatherType){
    var pro = fatherType.prototype;
    pro.constructor = sonType.constructor;
    sonType.prototype = pro;
})(son,father )
var son1 = new son('name')
console.log();


   