let A=[5,4,3,2,1]

function bubble_sort(A){
    let i=0
    let temp
    for(let j=0;j<A.length;j++){
        for(i=0;i<A.length;i++){
            if(A[i]>A[i+1]){
                //swap 
                let temp = A[i]
                A[i]=A[i+1]
                A[i+1]= temp
            }
            
        }
    }
    console.log(A)
 }

 bubble_sort(A)
 //time complexity of bubble_sort is O(n^2);