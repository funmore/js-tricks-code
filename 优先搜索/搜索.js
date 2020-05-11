let r = 0b100
let w = 0b010
let x = 0b001
let authList ={
  key: 'page',
  value: r|w,
  children: [
    {
      key: 'important',
      value: r|w,
    },
    {
      key: 'timeLine',
      value: r|w
    },
    {
      key: 'message',
      value: r|w
    },
    {
      key: 'announce',
      value: r|w
    },
    {
      key: 'member',
      value: r|w
    },
    {
      key: 'zoom',
      value: r|w
    },
    {
      key: 'more',
      value: r|w,
      children: [
        {
          key:'coe',
          value: r|w
        },
        {
          key:'reprocess',
          value: r|w
        },
        {
          key:'archive',
          value: r|w
        },
        {
          key:'askReport',
          value: r|w
        },
        {
          key:'level',
          value: r|w
        },
        {
          key:'finalize',
          value: r|w
        },
        {
          key:'history',
          value: '123'
        }
      ]
    }
  ]
}

// 1. 深度优先遍历
function findPathDFS(source, goal) {
  //  把所有资源放到一个树的节点下，因为会改变原数据，因此做深拷贝处理
  var dataSource = [{children: JSON.parse(JSON.stringify(source))}]
  var res = []
  return (function dfs(data) {
    if (!data.length) return res
    res.push(data[0])
    // 深度搜索一条数据，存取在数组 res 中
    if (data[0].children) return dfs(data[0].children)
    // 匹配成功
    if (res[res.length - 1].value === goal) {
      // 删除自己添加树的根节点
      res.shift()
      return res.map(r => r.key)
    }
    // 匹配失败则删掉当前比对的节点
    res.pop()
    // 没有匹配到任何值则 return
    if (!res.length) 
      return res
      // 取得最后一个节点，待做再次匹配
    var lastNode = res[res.length - 1]
    // 删除已经匹配失败的节点（即为上面 res.pop() 的内容）
    lastNode.children.shift()
    // 没有 children 时
    if (!lastNode.children.length) {
      // 删除空 children，且此时需要深度搜索的为 res 的最后一个值
      delete lastNode.children
      return dfs([res.pop()])
    }
    return dfs(lastNode.children)
  })(dataSource)
}

var a = findPathDFS(authList, '123')
console.log(a)
//////
//