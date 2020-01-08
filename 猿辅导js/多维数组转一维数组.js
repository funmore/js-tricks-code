function getFlatten(arr){
    var ret = []
    var length =arr.length
    var i = 0
    for(i ;i<length;i++){
        if(arr[i] instanceof Array){
           var flatten= getFlatten(arr[i])
           ret=ret.concat(flatten)
        }else{
            ret.push(arr[i])
        }
    }
    return ret
}


var ret = getFlatten([1,[2,3]])
console.log(ret)
