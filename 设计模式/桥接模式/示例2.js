// 这个例子就是抽象层和实现层的解耦
// 提取共同点（抽象层）给每个对象都添加公共方法，即addMethod方法
Object.prototype.addMethod = function(name,fn){
    this[name] = fn;
}
// 创建类并实例化对象（实现层）
function Box(x,y,z){
   this.x=x;
   this.y=y;
   this.z=z;
}

var box=new Box(20,10,10);
// 为对象拓展方法（桥接方法）

box.addMethod("init",function(){
   console.log("盒子的长度为："+this.x+" , 宽度为："+this.y+" , 高度为："+this.z);
});
// 测试代码
box.init();

