let A=[1,4,8,3,6,2]
let n = A.length


function insertionSort(A,n){
    for(let i=0+1;i<n;i++){
    let key = A[i]
    let j=i-1;
    while(i>0 && A[j]>key){
        let temp = A[j]
        A[j] = A[j+1]
        A[j+1] = temp
        j=j-1
    }
    A[j+1]=key
}
    return A
}

console.log(insertionSort(A,n));
