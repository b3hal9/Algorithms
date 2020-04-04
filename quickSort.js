a=[2,8,7,1,3,5,6,4]
n=a.length
let p = a[n]
let f=a[0]

//p means pivot element and f=first element of array 
function partition(a,p,n){
  
  
  let i=p-1
  for(let j=f;j<n-1;j++){
    if(a[j]<=p){
      let temp = a[i]
      a[i]=a[j]
      a[j]=temp
    }
  }
   let temp =a[i+1]
    a[i+1]=a[n]
    a[n] = temp
    return i+1

}
function quickSort(a,f,n){
  if (f<n){
    let d= partition(a,p,n)
    let r = quickSort(a,f,d-1)
    let s = quickSort(a,d+1,n)
    let result=[]
    result.push(r)
    result.push(s)
    return result
  }
}
console.log(quickSort(a,f,n))