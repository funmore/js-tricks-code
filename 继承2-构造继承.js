//优点：  可以多继承

//缺点 无法继承父类在prototype 上 属性

// function animal(){
//     this.type ='animal' ;
//     this.say = ()=>{
//         console.log(this.type)
//     }
// }
// animal.prototype={
//     do:function (){
//         console.log('123')
//     }
// }

// function creature(){
//     this.height = 'various'
//     this.getHeight = ()=>{
//         console.log(this.height)
//     }
// }

// function dog(){
//     animal.call(this)
//     creature.call(this)
//     this.name = 'dog'
//     this.type = this.type.concat('dog')
// }

// var d1 = new dog()
// d1.say()
// d1.getHeight()
// console.log()

function father1(name){
    this.type='father1';
    this.height='177'
    this.name = name;
    this.say=()=>{
        console.log('father1 instance name is '+this.name)
    }
}
father1.prototype.say=()=>{
    console.log('father1 protot name is '+this.name)
}
function father2(name){
    this.type='father2';
    this.width='30'
    this.name = name;
    this.say=()=>{
        console.log('father2 instance name is '+this.name)
    }
}
father2.prototype.say=()=>{
    console.log('father2 protot name is '+this.name)
}

function son(name){
    father1.call(this)
    father2.call(this)
    this.name = name;
    this.say=()=>{
        console.log('son instance name is '+this.name)
    }
}
son.prototype.say=()=>{
    console.log('son protot name is '+this.name)
}

var son1 = new son('fanziqing');
son1.say();




