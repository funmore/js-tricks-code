'use strict'
function* generatorFunc(i){
    i++;
    yield i;
    i++;
    yield i;
    i++;
    return i
}


let generator1 = generatorFunc(0);
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
// console.log(generatorFunc(0).next())
// console.log(generatorFunc(0).next())
// console.log(generatorFunc(0))