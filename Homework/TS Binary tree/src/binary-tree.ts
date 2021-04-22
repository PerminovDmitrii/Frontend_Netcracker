import TreeNode from "./tree-node";


export default class BinaryTree {
    root: TreeNode<string> | null;

    constructor () {
        this.root = null;
    }

    public addNode(key: number, data: string): void {
        const newNode: TreeNode<string> = new TreeNode(data, key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.recurceAddNode(newNode, this.root);
        }
    }

    private recurceAddNode(newNode: TreeNode<string>, root: TreeNode<string>): void {
        newNode.depthLevel++;
        if (newNode.depthLevel > 4) {
            alert("Maximum tree depth reached!");
            return;
        }
        if (newNode.key < root.key) {
            root.leftChild === null ? root.leftChild = newNode : this.recurceAddNode(newNode, root.leftChild);
        } else if (newNode.key > root.key) {
            root.rightChild === null ? root.rightChild = newNode : this.recurceAddNode(newNode, root.rightChild);
        } else {
            alert("Such a key already exists!");
            return;
        }
    }

    public removeHelper (key: number, root: TreeNode<string>): void {
        root = this.removeNode(this.root, key);
    }

    private removeNode(root: TreeNode<string>, key: number): TreeNode<string> {
        if (root === null) {
            return null;
        }
        if (key < root.key) {
            root.leftChild = this.removeNode(root.leftChild, key);
            return root;
        }
        if (key > root.key) {
            root.rightChild = this.removeNode(root.rightChild, key);
            return root;
        }
        if (root.leftChild === null && root.rightChild === null) {
            root = null;
            return root;
        }
        if (root.leftChild === null) {
            root = root.rightChild;
            return root;
        }
        if (root.rightChild === null) {
            root = root.leftChild;
            return root;
        }

        const newNode = this.searchMinNode(root.rightChild);
        root.key = newNode.key;
        root.rightChild = this.removeNode(root.rightChild, newNode.key);
        return root;

    }

    private searchMinNode(root: TreeNode<string>): TreeNode<string> {
        if (root.leftChild === null) {
            return root;
        }
        return this.searchMinNode(root.leftChild);
    }

    public searchNodeByKey(key: number, root: TreeNode<string>): TreeNode<string> | null {
        try {
            if (key === root.key) {
                return root;
            }
            if (key > root.key) {
                return this.searchNodeByKey(key, root.rightChild);
            }
            if (key < root.key) {
                return this.searchNodeByKey(key, root.leftChild);
            }
        } catch (err) {
            alert("There is no such key!");
            return null;
        }
    }

    public isHaveRoot(binaryTree: BinaryTree): null {
        if (binaryTree.root === null) {
            alert("The tree is not initialized!");
            return null;
        }
    }
}
