function test(){
    var n =9;
    function doTest(){
        n++;
        console.log(n)
    }
    return {
        n:n,
        doTest:doTest
    }
}
var t1 = new test();
var t2 = new test();
t1.doTest();
t1.doTest();
console.log(t1.n);

t2.doTest();