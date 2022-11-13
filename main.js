

class Node {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
        
    }
}


class Tree {
    constructor(array) {
        this.array = array.sort((a, b) => a - b);
        this.root = this.buildTree(this.array,0,this.array.length -1)
        
    }
   
    buildTree(array, start, end) {
        
       
        
        
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end) / 2)
        let root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid - 1)
        root.right = this.buildTree(array, mid+1, end)
        return root;
    }

    insert(data) {
        const newNode = new Node(data);
        this.insertNode(this.root, newNode)
        this.array.push(data)
      
    
    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    delete(data) {
        let index = this.array.indexOf(data)
        if (index > -1) {
            this.array.splice(index,1)
        }
        this.root = this.deleteRec(this.root, data)
        return this;
       
    }
    deleteRec(root, data) {
        if (root == null) {
            return root;
        }
        if (data < root.data) {
            root.left = this.deleteRec(root.left, data)
        }
        else if (data > root.data) {
            root.right = this.deleteRec(root.right, data)
        }
        else {
            if (!root.left && !root.right) {
                return null
            }

            if (!root.left) {
             return root.right
            }
            else if (!root.right) {
                return root.left;
            }
            root.data = this.min(root.right)
            root.right = this.deleteRec(root.right, root.data)
        }  
        return root;
    }
    min(root) {
        if (!root.left) {
            return root.data
        }
        else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.data;
        }
        else {
            return this.max(root.right)
        }
    }
    find(data) {
        if (this.root == null) {
            return this.root;
        }
        if (data < this.root.data) {
            this.root = this.root.left;
        }
        else if (data > this.root.data) {
            this.root = root.right;
        }
        return this.root;
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

let testArr = [345,1,2,3,4,5,6,7,8,9]


let tree1 = new Tree(testArr)


tree1.insert(313)
tree1.buildTree(testArr,0,testArr.length - 1)


tree1.insert(12312)

console.log(testArr)

tree1.delete(345)
console.log(tree1.min(tree1.buildTree(testArr, 0, testArr.length)))





prettyPrint(tree1.buildTree(testArr, 0 , testArr.length -1))



