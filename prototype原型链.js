function fun1(name){
    func2.call(this)
    this.name = name;
}
fun1.prototype.do = function(){
    console.log('dodo')
}

function func2 (type){
    this.type =type
}

var a =  new fun1('funmore');
console.log()
