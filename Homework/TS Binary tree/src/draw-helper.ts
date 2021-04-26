import TreeNode from "./tree-node";



export default class DrawHelper {

    public spreadByDepth: number;

    constructor () {
        this.spreadByDepth = 250;
    }

    public drawTree(root: TreeNode<string>): void {
        const tempPosArray: number[] = [];
        let posArray: number[] = [];
        posArray = this.createPosArray(root, tempPosArray);
        console.log(posArray);
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

    private createPosArray(root: TreeNode<string>, posArray: number[]): number[] {
        if (root !== null) {
            posArray.push(root.key, root.xPos, root.yPos);
            this.createPosArray(root.leftChild, posArray);
            this.createPosArray(root.rightChild, posArray);
        }
        return posArray;
    }
}
