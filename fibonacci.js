let getNthFib=(n)=>{

    //basic Way: with O(2^n)complexity and O(n) Time space
    // if (n===2)
    //     return 1
    // else if (n===1)
    //     return 0
    // else 
    //     return getNthFib(n-1)+getNthFib(n-2)


    //with O(n) compelxity and O(1) Time space
    lasttwo=[0,1]
    count=3
    while (count<=n){
        nextFib =lasttwo[0]+lasttwo[1]
        lasttwo[0]=lasttwo[1]
        lasttwo[1]=nextFib
        count+=1
        if (n>1) 
            return lasttwo[1] 
        else
            return lastwo[0]
    }
}
console.log(getNthFib(5))