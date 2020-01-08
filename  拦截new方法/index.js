function func(name){
    // if(this instanceof func){
    //     console.log('can not use new')
    //     return ;
    // }
    this.name = name
}


// var a = new func('123213')


//重写new 

function _new(func,...args){
    var obj  = Object.create(func.prototype)
    var ret = func.apply(obj,args);
    return ret instanceof Object ? ret:obj; 
}



var obj1 = _new(func,'12312','funmore')

console.log()