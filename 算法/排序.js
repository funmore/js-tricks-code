function Swap(a, b ){
    var temp = a ;
    a = b;
    b =temp;
}
//冒泡排序
function BubbleSort(arr){
    if(!(arr instanceof Array) || arr.length ==0) return;
    var length = arr.length;
    for (var i = 0 ; i<length;i++){
        for(var j = i ; j< length; j++){
            if(arr[j]<arr[i]){
                // Swap(arr[i],arr[j])
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] =temp
            }
        }
    }
    return arr;

}
//插入排序
//核心思想
//1. 从index==1 开始， 每次从arr[index]和已经排序的数组尾部倒序开始比较
//2.1 如果尾部倒序比arr[index]大，则将此数字后移动一位
//2.2 如果尾部倒序比arr[index]小或者等于，则在此尾部倒序数字后面插入此arr[index]
function InsertSort(arr){
    if(!(arr instanceof Array) || arr.length ==0) return;
    var length = arr.length;
    for(var i = 1;i<length; i++){
        for(var j = i-1 ;j>=0; j--){
            var temp = arr[i];
            if(arr[j]>arr[i]){
                arr[j+1]= arr[j];
            }else{
                arr[j+1]=temp;
                break;
            }
        }
    }
    return arr;
}
//选择排序
//核心思想
//1. 从index =0 开始，找到未排序区间最小值
//2. 将最小值与此index 进行交换
function SelectionSort(arr){
    if(!(arr instanceof Array) || arr.length ==0) return;
    var length = arr.length;
    //第一步获取交换的id
    for( var i = 0 ; i<length-1; i++){
        var minIndex=i;
        for (var j = i+1;j<length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        //如果是minIndex没有发生过变化，则不交换   否则交换 
        if(i!= minIndex){
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }
    return arr;
}
//归并排序
//
function MergeSort(arr){
    if(!(arr instanceof Array) || arr.length <2) return;
    var p = 0;
    var r = arr.length-1;


    merge_sort_c(arr,p, r)
    return arr;
}
function merge_sort_c(arr,p,r){
    if(p>=r) return ;
    var q = Math.floor((p+r)/2);

    merge_sort_c(arr,p,q);
    merge_sort_c(arr,q+1,r);
    merge(arr,p,q,r)
    return arr;

}
//merge函数
//核心思想
//1.使用while循环，申请一个temp，比较2个数组的每一个大小，并将较小的一个放到前面
//2.跳出while循环，对剩下的一个数组的所有内容，推入到temp的尾部
//3.将temp整体覆盖arr对应的p到r的位置
function merge(arr,p,q,r){
    var i = p;
    var j =q+1;
    var temp=[];
    while(i<=q && j<=r){

        if(arr[i]>arr[j]){
            temp.push(arr[j]);
            j++;
        }else{
            temp.push(arr[i]);
            i++;
        }
    }
    if(i<=q){
        for(i;i<=q;i++){
            temp.push(arr[i])
        }
    }
    if(j<=r){
        for(j;j<=r;j++){
            temp.push(arr[j])
        }
    }
    if(temp.length!==(r+1-p)){
        console.log(temp)
    }
    for(var k=p;k<r+1;k++){
        arr[k] = temp.shift();
    }
    return arr;
}

//快速排序
function QuickSort(arr){
    if(!(arr instanceof Array) || arr.length ==0) return;
    var n = arr.length;
    quick_sort_c(arr,0,n-1)
    return arr;
}
function quick_sort_c(arr,p,r){
    if(p>=r) return ;
    q = partition (arr,p,r);
    quick_sort_c(arr,p,q-1);
    quick_sort_c(arr,q+1,r);
}
function partition(arr,p,r){
    var pivotIndex = r;
    var i = p;
    for(var j =p; j<=r-1;j++){
        if(arr[j]<arr[pivotIndex]){
            var temp = arr[j];
            arr[j] =arr[i];
            arr[i] = temp; 
            i++;
        }
    }
    var temp = arr[pivotIndex];
    arr[pivotIndex] = arr[i];
    arr[i] =temp;
    return i;
}


var arr =[2,4,3,2,6,5,4,4]
var arrnew = QuickSort(arr);
console.log(arrnew)