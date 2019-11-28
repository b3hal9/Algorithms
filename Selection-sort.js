let selectionSort=items=> {
    let length = items.length;
    let i,j
	for ( i = 0; i <= length; i++) {
		
		let min = i; 
		for ( j = i + 1; j < length; j++) { 
			if (items[j] < items[min]) { 
				min = j; 
			}
		}
        let tmp = items[min];
			items[min] = items[i];
			items[i] = tmp;
    }
    for(i=0;i<length;++i){
        console.log(items[i])
    }

    console.log(`The length of list = ${length}`)
}

let items=[5,2,3,7,8,1,9,4,6]
selectionSort(items)

