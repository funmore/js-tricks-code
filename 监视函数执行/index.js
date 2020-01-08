function func(){
    console.log('func is running ')
    console.log('func is done runed')
}


function _Symbol(data){
    if(this instanceof _Symbol){
        try{
            throw new Error('cannot use new ')
        }catch(e){
            console.log(e)
            return;
        }
    }
    if(this.dataArr==undefined){
        this.dataArr =[]
    }
    var index = this.dataArr.indexOf(data);
    if(index ==-1){
        this.dataArr.push(data);
        return data;
    }else{
        return this.dataArr[index];
    }
}
var a0 = _Symbol(1);
var a1 = _Symbol(1);
var s0 = _Symbol('funmore')
var s1 = _Symbol('funmore')

// _Symbol.prototype.constructor=null;
// function(){
//     try{
//         throw new Error('cannnot use constructor')
//     }catch(e){
//         alert(e)
//     }
// }

var a = new _Symbol(3)

console.log();
