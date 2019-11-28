
function print_data(item){
    for(i=0;i<item.length;i++){
        console.log(item[i])
    }
}
function answer(value){
   
    let size=item.length
    let mid_value=Math.round(size/2)
    console.log("The data are: ")
    print_data(item)
    console.log(`The mid value is: ${item[mid_value]}`)
    console.log(`the size of Array is ${size}`)
    
}
function binary_search(item,value){
    let size=item.length
    let mid_value=Math.round(size/2)
    let i 
    for(i=0;i<size;i++){
        if(value!=item[i]){
            console.log(`(${value}) does not exist in data.`)
            break
        }
    }

    if(value<=item[mid_value]){
        for(i=0;i<item[mid_value];i++){
             if(value==item[i]){
                answer(value)
                console.log(` '${value}' is found on given data in index: ${i}.`)
                }
                
               
            }
        }
     else if(value>item[mid_value]){
         for(i=item[mid_value];i<item[size-1];i++){
             if(value==item[i]){
                answer(value)
                console.log(` '${value}' is found on given data in index: ${i}.`)
                    
                }
                
            }
        }
    
}
let item=[1,2,3,4,5,6,7,8,9]
// let item=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// let item=[8,9,5,2,4,1,6,2]


binary_search(item,8)
// binary_search(item,10)
// binary_search(item,-1)

