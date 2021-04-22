export default class TreeNode<T> {
    leftChild: TreeNode<T> | null;
    rightChild: TreeNode<T> | null;
    depthLevel: number;

    constructor (public data: T, public key: number) {
        this.data = data;
        this.key = key;
        this.leftChild = null;
        this.rightChild = null;
        this.depthLevel = 0;
    }
}
