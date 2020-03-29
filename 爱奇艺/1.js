var a =1;
function func1(a){
    if(a){
        console.log(a)
    }
    var b =0;
    arguments[0]=3;
    console.log(a);
}
func1(a)

// function func2(a){
//     a =2;
//     console.log()
// } 

// func2()