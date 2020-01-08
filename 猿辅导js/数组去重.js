function deleteDup1(arr){
    var ret =[]
    arr.forEach((element,index,self) => {
        if(self.indexOf(element)==index){
            ret.push(element)
        }
    });
    return ret
}

deleteDup1([1,2,3,4,3,3,3,2])


function deleteDup2(arr){
    for(var i=0;i<arr.length  ;i++){
        for(var j=i+1;j<arr.length  ;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr;
}

deleteDup2([1,1,1])

const s = new Set()
s.add(1)
s.add(1)
s.add(2)


const arr = [[1, 2], [1,3]]
const weakset = new WeakSet(arr)
console.log(weakset)