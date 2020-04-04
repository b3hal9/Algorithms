function merge(left,right){
    let result=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift())
        }
        else{
           result.push(right.shift())
        }
    }
   while(left.length)
        result.push(left.shift())
    while(right.length)
        result.push(right.shift())
    return result

}
function merge_sort(data){
    if(data.length<=1){
        return data}
    let mid_value=Math.round((data.length)/2)
    let left=data.slice(0,mid_value)
    let right=data.slice(mid_value,data.length)
    return merge(merge_sort(left),merge_sort(right))
}

let data=[4,3,5,2,6,1,8,7,9]
console.log(merge_sort(data))

