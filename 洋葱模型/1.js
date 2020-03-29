app.compose = function() {
    // 递归函数
    function dispatch(index) {
        // 如果所有中间件都执行完跳出
        if (index === app.middlewares.length) return;

        // 取出第 index 个中间件并执行
        const route = app.middlewares[index];
        return route(() => dispatch(index + 1));
    }

    // 取出第一个中间件函数执行
    dispatch(0);
};


const Koa = require("koa");

const app = new Koa();

app.use(asycn (ctx, next) => {
    console.log(1);
    await next();
    console.log(2);
});

app.use(asycn (ctx, next) => {
    console.log(3);
    await next();
    console.log(4);
});

app.use(asycn (ctx, next) => {
    console.log(5);
    await next();
    console.log(6);
});


app.compose = function(){
    function dispatch(index){

        if(index === app.middlewares.length) return;

        const route = app.middlewares[index];
        return route(()=>dispatch(index+1))
    }
    dispatch(0);
}