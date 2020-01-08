//call
// say需要是一个唯一值 是不是突然想到es6的新类型 Symbol   fn = Symbol() 不过我们装逼不嫌事大 都说自己实现了

function mySymbol(obj) {
    // 不要问我为什么这么写，我也不知道就感觉这样nb
    let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8)
        // 牛逼也要严谨
    if (obj.hasOwnProperty(unique)) {
        return mySymbol(obj) //递归调用
    } else {
        return unique
    }
}
//接下来我们一并把多参数和执行完删除自定义方法删除掉一块搞定
Function.prototype.myCall1 = function(context) {
    // 如果没有传或传的值为空对象 context指向window
    context = context || window
    let fn = mySymbol(context)
    context[fn] = this //给context添加一个方法 指向this
    // 处理参数 去除第一个参数this 其它传入fn函数
    let arg = [...arguments].slice(1) //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
    context[fn](...arg) //执行fn
    delete context[fn] //删除方法
}

let Person = {
    name: 'Tom',
    say(age) {
        console.log(this)
        console.log(`我叫${this.name}我今年${age}`)
    }
}

Person1 = {
    name: 'Tom1'
}

Person.say.call(Person1,18)//我叫Tom1我今年18

