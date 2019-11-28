class Node{
    constructor(data,left_child=null,right_child=null)
    {
        this.data=data
        this.left_child=left_child
        this.right_child=right_child
    }
}

class Binary_search_tree{
    constructor(root,size){
        this.root=null
        this.size=0
    }
    Insert_data(data){
        const node=this.root
        if(node===null){
            this.root=new Node(data)
            return
        }else{
            const search_tree=node=>{
                if(data<node.data){
                    if(node.left_child===null){
                        node.left_child=new Node(data)
                        return
                    }else if(node.left_child!=null){
                        return search_tree(node.left_child)
                    }
                }
                else if(data>node.data){
                    if(node.right_child===null){
                        node.right_child=new Node(data)
                        return 
                    }else if(node.right_child!=null){
                        return search_tree(node.right_child)
                    }
                }
                else{
                    return null
                }
            }
            return search_tree(node)
        }
    }
    min_value(){
        let pointer=this.root
        while(pointer.left_child!=null){
            pointer=pointer.left_child
        }
        return pointer.data
    }
    max_value(){
        let pointer=this.root
        while(pointer.right_child!=null){
            pointer=pointer.right_child
        }
        return pointer.data
    }
    search_data(data){
        let pointer=this.root
        while(pointer.data!==data){
            if(data<pointer.data){
                pointer=pointer.left_child
            }else{
                pointer=pointer.right_child
            }
            if(pointer===null){
                return null
            }
        }
        return pointer
    }
    Del_data(data){
        let removeNode=(node,data)=>{
            if(node == null){
                return null
            }
            if(data==node.data){
                if(node.left_child==null && node.right_child==null){
                    return null     //when there is no children
                }
                if(node.left_child==null){
                    return node.right_child //when there is only right children
                }
                if(node.right_child==null){
                    return node.left_child //when there is only left children
                }
                //when there are both children
                let temp_node=node.right_child
                while(temp_node.left_child!==null){
                    temp_node=temp_node.left_child
                }
                node.data=temp_node.data
                node.right_child=removeNode(node.right_child,temp_node.data)
                return node
            }
            else if(data<node.data){
                node.left_child=removeNode(node.left_child,data)
                return node
            
            }else{
                node.right_child=removeNode(node.right_child,data)
            }
        }
        this.root=removeNode(this.root,data)
    }

}



const bst=new Binary_search_tree()
bst.Insert_data(14)
bst.Insert_data(4)
bst.Insert_data(41)
bst.Insert_data(8)
bst.Insert_data(1)
bst.Insert_data(6)
bst.Insert_data(20)
bst.Insert_data(15)
bst.Insert_data(15)

console.log(bst.min_value())
console.log(bst.max_value())
console.log(bst.search_data(8))
bst.Del_data(8)
console.log(bst.search_data(8))