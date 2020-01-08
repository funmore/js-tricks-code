/*
* parameter: data:本节点的数据；left：做节点；right：右节点
*/
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}
function BST(){
    this.root = null;
    this.insert = insert;
}
/*
* parameter: data:本节点的数据；
* 创建节点示例并插入到二叉树的正确位置
*/
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}
function BST(){
    this.root = null;
    this.insert = insert;
    this.find =find;
    this.remove = remove;
}
function insert(data){
    var node = new Node(data,null,null);
    if(this.root ==null){
        this.root = node;
    }else{
        var current = this.root;
        while(true){
            if(current.data>data){
                if(current.left==null){
                    current.left = node;
                    break;
                }else{
                    current= current.left
                }
            }else{
                if(current.right == null){
                    current.right = node;
                    break;
                }else{
                    current = current.right;
                }
            }
        }
    }
}
function find(data){

    var current = this.root;
    if(current===null) return null;
    while(true){
        if(data ===current.data){
            return current;
        }
        current = data< current.data? current.left : current.right;
        if(current==null){
            return null;
        }
    }
}
function remove(data){
    this.root = removeNode(this.root, data)
}
function removeNode(node, data){
    if(node == null){
        return null;
    }
    if(node.data == data){
        if(node.left ==null&& node.right ==null){
            return null;
        }
        if(node.left ==null && node.right !=null){
            return node.right;
        }
        if(node.left !=null && node.right ==null){
            return node.left;
        }
        if(node.left !=null && node.right !=null){
            var minP= node.right;
            var minPP = node
            var count =0;
            while(minP.left!=null){
                minPP = minP;
                minP  = minP.left;
                count++;
            }
            if(count!=0){
                minPP.left =null;
            }else{
                node.right=null;
            }
            node.data = minP.data;
            
            return node;
        }
    }else if(data< node.data){
        node.left = removeNode(node.left, data);
        return node;
    }else{
        node.right = removeNode(node.right, data);
        return node;
    }
}

// var bst1 = new BST('af','fdda')
var bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(9);
bst.insert(10)
bst.insert(6);
bst.remove(3);
console.log(bst)