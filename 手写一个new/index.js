function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}
function _New1(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}


function boss(name){
    this.bossname = name;
}
function bossfather(name){
    this.fathername =name;
}
boss.prototype = new bossfather('fanxinghua');

var boss0 = new boss('funmore')
var boss1 = _new(boss,'funmore')
var boss2 =_New1(boss,'funmore')
console.log()


//不是对象
function testnew0(name){
    this.name =name;
    return this.name;
}
//是对象 但是this
function testnew1(name){
    this.name =name;
    return this;
}
//是对象 但是this
function testnew2(name){
    this.name =name;
    return Object.create({});
}
//不是对象
function testnew3(name){
    this.name =name;
}
var test0 = new testnew0('testnew0');  //返回的是 this
var test1 = new testnew1('testnew1');  //返回的是 this
var test2 = new testnew2('testnew2');  //返回的是 Object.create({});
var test3 = new testnew3('testnew3');  //返回的是 this

console.log();



