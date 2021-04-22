import TreeNode from "./tree-node";


export default class DrawHelper {

    private spreadByDepth: number;
    private xPosFirsrNode: number;
    private yPosArr: number[];

    constructor () {
        this.spreadByDepth = 250;
        this.xPosFirsrNode = window.innerWidth / 2 - 60;
        this.yPosArr = [80, 160, 240, 320, 400];
    }

    public drawTree(root: TreeNode<string>): void {
        const tempPosArray: number[] = [];
        let posArray: number[] = [];
        posArray = this.createPosArray(this.xPosFirsrNode, this.yPosArr, root, tempPosArray, this.spreadByDepth);

        const canvas = <HTMLCanvasElement> document.getElementById("canvas-output");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let i: number = 0;
        while (i < posArray.length) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#ab";
            ctx.strokeRect(posArray[i + 1], posArray[i + 2], 60, 30);
            ctx.font = "20px Georgia";
            ctx.textAlign = "center";
            ctx.fillText(`${posArray[i]}`, posArray[i + 1] + 30, posArray[i + 2] + 15);
            i += 3;
        }
    }

    private createPosArray(width: number, yPosArr: number[], root: TreeNode<string>, posArray: number[], spreadByDepth: number): number[] {
        if (root !== null) {
            posArray.push(root.key, width, yPosArr[root.depthLevel]);
            this.createPosArray(width - spreadByDepth, yPosArr, root.leftChild, posArray, spreadByDepth / 2);
            this.createPosArray(width + spreadByDepth, yPosArr, root.rightChild, posArray, spreadByDepth / 2);
        }
        return posArray;
    }
}
