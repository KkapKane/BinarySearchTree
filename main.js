

class Node {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
        
    }
}


class Tree {
    constructor(array) {
        array = this.array;
        this.root = null;
        
    }
   
    buildTree(array, start, end) {
        
        array = array.sort((a, b) => a - b);
        
        
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end) / 2)
        let root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid - 1)
        root.right = this.buildTree(array, mid+1, end)
        return root;
    }

    insert(key) {
        let newNode = new Node(key);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let tree = this.root;

        while (true) {
            if (key < tree.data) {
                if (!tree.left) {
                    tree.left = newNode;
                    return this;
                }
                tree = tree.left;
            }
            else {
                if (!tree.right) {
                    tree.right = newNode;
                    return this;
                }
                tree = tree.right;
                
            }
            
        }
     
        return this;
    
    }
}

testArr = [1,2,19,4,5,6,7,8,9,1000,2000,3000,4000,5000]
testArr.push(200)
testArr.push(201)
testArr.push(800)
testArr.push(123)
testArr.push(123)
testArr.push(222)

const tree1 = new Tree(testArr)


tree1.insert(2000)


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
console.log(tree1.buildTree(testArr, 0 , testArr.length ))
  
prettyPrint(tree1.buildTree(testArr,0,testArr.length - 1))