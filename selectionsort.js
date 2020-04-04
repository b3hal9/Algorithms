let A=[5,2,8,1,6,3]
let n=A.length

function selectionSort(A,n){
    let i=0, j=0,temp,min
    for(i=0;i<n;i++){
             min=i;
        for(j=i+1;j<n;j++){
        if(A[min]>A[j]){
            min=j
        }
        temp = A[min]
        A[min]=A[i]
        A[i]=temp
    }}
    console.log(A)
  
}
selectionSort(A,n)
