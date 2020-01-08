function deepclone(obj){
    var result = null
    if(typeof obj === 'object'){
        result = isArray(obj)?[]:{};
        for(let i in obj){
            result[i] =  (isObject(obj[i])||isArray(obj[i]))? deepclone(obj[i]):obj[i]
        }
    }else{
        result = obj
    }
    return result
}

function isArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]'
}

function isObject(obj){
    return Object.prototype.toString.call(obj) === '[object Function]'
}

var obj = {a:1,b:2}
var obj1 = deepclone(obj)


console.log()

