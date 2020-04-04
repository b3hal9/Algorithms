function reverse_array(item){
    let start=0,size=item.length,end=size-1,swap
    while(start<end){
        swap=item[start]
        item[start]=item[end]
        item[end]=swap
        start++
        end--
    }
    for(let i=0;i<size;i++){
        console.log(item[i])
    }
    console.log(`the size of array is ${size}`)
}
let item=[1,2,3,4,5,6]
console.log(item)
console.log('The reverse of the Array is: ')

reverse_array(item)
