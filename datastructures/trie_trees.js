class Node {
    constructor(value = null){
        this.value = value;
        this.end = false;
        this.children = {};

        //use children gives you a O(n) lookup
    }
}

class Trie {
    constructor(){
        this.head = new Node()
    }

    add = (value) => {
       let node = this.head
       let node_children = node.children;
       for(let i = 0; i < value.length; i++){
           let index = node_children.indexOf(value[i]);
           if( index === - 1){
            node = new Node(value[i])
            node_children.push(node);
            node_children = node_children[node_children.length - 1].children
           }
           else{
              node_children  = node_children[index].children
           }
           if(value.length - 1 === i){ 
               node.end = true;     
            }
       }
    }

    print = () => { 
         let node = this.head;
         function printNode (node) {
                console.log(node.value); 
            }
         if(!node.end){
            return printNode(node)
         }
    }
}

let tree = new Trie;

console.log(tree.add("same"))
console.log(tree.print())
