let data=[4,1,6,20,23,12,8]

let linear_search =(data,value)=>{
    let size=data.length
    let i
    for(i=0;i<size;i++){
        if(value===data[i]){
            console.log (`The ${value} is found in index: ${i}`)
        }
    }
}
linear_search(data,12)