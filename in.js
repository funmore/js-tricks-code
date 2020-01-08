function func(a,b){
    var c = a+b;
    console.log(c)
    return func(c,a)
}

func(1,2)