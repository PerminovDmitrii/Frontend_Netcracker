export default class TreeNode<T> {
    leftChild: TreeNode<T> | null;
    rightChild: TreeNode<T> | null;
    depthLevel: number;
    xPos: number;
    yPos: number;

    constructor (public data: T, public key: number) {
        this.data = data;
        this.key = key;
        this.leftChild = null;
        this.rightChild = null;
        this.depthLevel = 0;
        this.xPos = window.innerWidth / 2 - 60;
        this.yPos = 80;
    }
}
