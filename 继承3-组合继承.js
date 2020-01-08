//优点：  既继承了父类属性和方法，也继承了父类的原型链的属性和方法

//缺点 生成了2此实例

// function animal(){
//     this.type ='animal' ;
//     this.say = ()=>{
//         console.log(this.type)
//     }
// }




// function dog(){
//     animal.call(this)

// }

// var an = new animal();

// dog.prototype = new animal();
// dog.doprototype.constructor =  dog;


// console.log()


function father(name){
    this.type ='father'
    this.name = name;
    this.say =()=>{
        console.log('father instance name is '+ this.name)
    }
}
father.prototype.say=()=>{
    console.log('father protot name is '+ this.name)
}

function son(name){
    father.call(this);
    this.name = name;
    this.say =()=>{
        console.log('son instance name is '+ this.name)
    }
}
son.prototype.say=()=>{
    console.log('son protot name is '+ this.name)
}
son.prototype = new father('fanxinghua')
var son1 = new son('fanziqing');

console.log()