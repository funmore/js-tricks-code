var a1 = Symbol(1)
var a2 = Symbol(2)
var a3 = Symbol(1)

var obj ={ 
    a:1,
    b:2
}
var b1 = Symbol(obj) 
var b2 = Symbol(obj)

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false


console.log()

