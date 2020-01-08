function dog(name){
    this.name=name;
    this.say = this.say.bind(this);
}
dog.prototype.say=function(){
    console.log(this);
}

var dog1=new dog('f')
dog1.say();