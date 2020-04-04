class Node{
    constructor(item,next=null){
        this.item=item
        this.next = next

    }
}

class lnklst{
    constructor(){
        this.start=null
        this.size=0
    }


   insert_first(item) {
        this.start=new Node(item,this.start)
        this.size++

}
    insert_last(item){
        let node= new Node(item)
        let present
        if(!this.start){
            this.start=node
        }else{
            present=this.start
            while(present.next){
                present=present.next
            }
            present.next = node
        }
        this.size++
    }
    insert_anywhere(item,key){
        if(key>0 && key>this.size){  
            return
        }
        if(key ===0){
            this.insert_first(item)
            
        }
        const node = new Node(item)
        let present,past,count=0
        present=this.start
        while(count<key){
            past=present //node before key
            count++
            present = present.next //node after key
        }
        node.next=present
        past.next = node
        this.size++
    }
    get_data(key){
        let present=this.start
        let count=0
        while(present){
            if(count == key){
                console.log(`The data in key:${key} is ${present.item}.`)
            }
            count ++
            present=present.next
        }
        return null

    }

    remove_data(key){
        if(key>0 && key>this.size){
            return 
        }
        let present=this.start
        let past, count=0
        if(key==0){
            this.start=present.next
        }else{
            while(count<key){
                count++
                past=present
                present=present.next
            }
            past.next = present.next
        }
        this.size--
    }

    erase_data(){
        this.head=null
        this.size=0
    }


    print_items(){
        let present = this.start
        console.log("The data in linklist are : ")
        while(present){
            console.log(present.item)
            present=present.next
        }
    }
}

const test = new lnklst()
test.insert_first(100)
test.insert_first(222)
test.insert_last(500)
test.insert_last(100)
test.insert_anywhere(501,1)


test.print_items()

test.remove_data(0)
test.get_data(0)