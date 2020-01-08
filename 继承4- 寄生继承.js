function createAnother(original){ 
    var clone =new  creature(original); //通过调用函数创建一个新对象
    clone.sayHi = function(){ //以某种方式来增强这个对象
   }; 
    return clone; //返回这个对象
   }


   var person = { 
    name: "Nicholas", 
    friends: ["Shelby", "Court", "Van"] 
   }; 
   var anotherPerson = createAnother(person); 
   anotherPerson.sayHi(); //"hi"
   console.log()

   function creature(name){
       this.name = name;
       this.say=()=>{
           console.log('creature instance is '+ this.name)
       }
   }
   creature.prototype.say=()=>{
    console.log('creature prototype is '+ this.name)
   }
