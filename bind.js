function add(a,b,c){
    console.log(a + b + c);

}
add(1,2,3)

var addvar=add.bind(null,1)
addvar(2,3)