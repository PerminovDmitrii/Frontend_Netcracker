import TreeNode from "./tree-node";


export default class BinaryTree {
    root: TreeNode<string> | null;

    constructor () {
        this.root = null;
    }

    public addNode(key: number, data: string, spreadByDepth: number): void {
        const newNode: TreeNode<string> = new TreeNode(data, key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.recurceAddNode(newNode, this.root, spreadByDepth);
        }
    }

    private recurceAddNode(newNode: TreeNode<string>, root: TreeNode<string>, spreadByDepth: number): void {
        newNode.depthLevel++;
        if (newNode.depthLevel > 4) {
            alert("Maximum tree depth reached!");
            return;
        }
        if (newNode.key < root.key) {
            if (root.leftChild === null) {
                newNode.xPos = newNode.xPos - spreadByDepth;
                newNode.yPos = newNode.yPos + 80;
                root.leftChild = newNode;
            } else {
                newNode.xPos -= spreadByDepth;
                newNode.yPos += 80;
                spreadByDepth = spreadByDepth / 2;
                this.recurceAddNode(newNode, root.leftChild, spreadByDepth);
            }
        } else if (newNode.key > root.key) {
             if (root.rightChild === null) {
                newNode.xPos += spreadByDepth;
                newNode.yPos += 80;
                root.rightChild = newNode;
                } else {
                    newNode.xPos += spreadByDepth;
                    newNode.yPos += 80;
                    spreadByDepth = spreadByDepth / 2;
                    this.recurceAddNode(newNode, root.rightChild, spreadByDepth);
                }
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
            root.rightChild.xPos = root.xPos;
            root.rightChild.yPos = root.yPos;
            root.rightChild.depthLevel = root.depthLevel;
            const tempNode = root.rightChild.rightChild;
            root = root.rightChild;
            root.rightChild = tempNode;
            return root;
        }
        if (root.rightChild === null) {
            root.leftChild.xPos = root.xPos;
            root.leftChild.yPos = root.yPos;
            root.leftChild.depthLevel = root.depthLevel;
            const tempNode = root.leftChild.leftChild;
            root = root.leftChild;
            root.leftChild = tempNode;
            return root;
        }

        let newNode = this.searchMinNode(root.rightChild);
        newNode.xPos = root.xPos;
        newNode.yPos = root.yPos;
        newNode.depthLevel = root.depthLevel;
        const rightChild = root.rightChild;
        const leftChild = root.rightChild;
        root = newNode;
        root.rightChild = rightChild;
        root.leftChild = leftChild;
        newNode = null;
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

    public travelModifTree(root: TreeNode<string>): void {
        if (root.leftChild !== null) {
            root.leftChild.depthLevel = root.depthLevel + 1;
            root.leftChild.xPos = root.xPos - 80;
            root.leftChild.yPos = (root.depthLevel + 2) * 80;
            this.travelModifTree(root.leftChild);
        }
        if (root.rightChild !== null) {
            root.rightChild.depthLevel = root.depthLevel + 1;
            root.rightChild.xPos = root.xPos + 80;
            root.rightChild.yPos = (root.depthLevel + 2) * 80;
            this.travelModifTree(root.rightChild);
        }
    }
}
