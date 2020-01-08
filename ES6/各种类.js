// class animal{
//     constructor(type){
//         this.type = type
//     }
//     play(){
//         console.log('animal ' +this.type)
//     }
// }

// class dog extends animal{
//     constructor(name){
//         super('anmail')
//         this.name = name;
//     }
//      say(){
//         console.log('saying i m a :'+this.name)
//     }
// }
// var dog0 = new dog('funmore');
// dog0.say()
// dog0.__proto__.play();

// var b = new Set([1,2,2,3,,434])



// console.log(b)
// for ( item in b.keys()) {
//     console.log(item)
// }

// var bnew =Array.from(b)



// var s1 = new Number(1);
// var s2 = new Number(2);
// var weaks= new WeakSet([s1,s2])

var map0 = new Map();
map0.set('dfd','string');
map0.set(new Number(1),'number object');
map0.set([2],'array')
map0.set(()=>{},'function')
map0.set(NaN,'nan');

var wmap0 = new WeakMap();
wmap0.set(new Number(1),'number object');
wmap0.set([2],'array')
wmap0.set(()=>{},'function')
// wmap0.set('dfd','string');
// wmap0.set(NaN,'nan');
// wmap0.set(1,'number')

for (i of map0.keys()){
    console.log(i)
}








console.log('end')

// var arr = ['a','b','c']
// for( i in arr){
//     console.log(i)
// }
// for( v of arr){
//     console.log(v)
// }


// var obj ={'a':'aaa','b':'bbb'}

// Object.keys(obj).map(x=>console.log(x))
// Object.keys(obj).map(x=>console.log(obj[x]))