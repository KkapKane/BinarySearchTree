

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
    }

    buildTree(array, start, end) {
        
        
        
        
        if (start > end) {
            return null;
        }
        let mid = (start + end) / 2
        let root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid - 1)
        root.right = this.buildTree(array, mid+1, end)
        return root;
    }
}

testArr = [1,2,3,4,5,6,7]
node1 = new Node(12, 12, 1)

const tree1 = new Tree(testArr)

console.log(tree1.buildTree(testArr,0,testArr.length - 1))
