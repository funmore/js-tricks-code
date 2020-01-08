var Stack  = function (){
    var list = []
    this.push=node =>{
        list.push(node)
    }
    this.pop =()=>{
        return list.pop()
    }
    this.isEmpty = ()=>{
        return list.length==0
    }
}

var s1= new Stack();
s1.push('a')
s1.push('b')
var a= s1.pop()
var b= s1.pop()
