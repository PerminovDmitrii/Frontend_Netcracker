import BinaryTree from "./binary-tree";
import DrawHelper from "./draw-helper";
import TreeNode from "./tree-node";

const binaryTree = new BinaryTree;
const drawHelper = new DrawHelper;
const ADD_KEY_ID: string = "entry-field__key";
const EXTR_KEY_ID: string = "entry-field__ext-key";
const DEL_KEY_ID: string = "entry-field__delete-key";

declare global {
    interface Window {
        addNode: Function;
        extractingNode: Function;
        deleteNode: Function;
        outputTree: Function;
        clearTree: Function;
    }
}

function keyHelper(id: string): number | null {
    const key: number = Number( (document.getElementById(id) as HTMLInputElement).value );
    if ( key > 50 || key < 0 || key % 1 > 0 || Number.isNaN(key) ) {
        alert("Invalid key value!");
        return null;
    }
    if (key === 0) {
        alert("Missing value in key field!");
        return null;
    }
    return key;
}

function addNode(): void {
    const key: number | null = keyHelper(ADD_KEY_ID);
    if (key === null) {
        return;
    }

    const data: string = (document.getElementById("entry-field__data") as HTMLInputElement).value;
    if (data.length === 0) {
        alert("Missing value in data field!");
        return;
    }
    if (data.length > 10) {
        alert("Invalid data field length!");
        return;
    }

    binaryTree.addNode(key, data);
    (document.getElementById("entry-field__data") as HTMLInputElement).value = "";
    (document.getElementById(ADD_KEY_ID) as HTMLInputElement).value = "";
}

window.addNode = addNode;

function extractingNode(): void {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }

    const key: number | null = keyHelper(EXTR_KEY_ID);
    if (key === null) {
        return;
    }

    const requiredNode: TreeNode<string> | null = binaryTree.searchNodeByKey(key, binaryTree.root);
    if (requiredNode === null) {
        return;
    }
    const data: string = requiredNode.data;
    (document.getElementById("output-field__ext-key") as HTMLElement).innerHTML = `Data: ${requiredNode.data}`;
    (document.getElementById(EXTR_KEY_ID) as HTMLInputElement).value = "";
}

window.extractingNode = extractingNode;

function deleteNode(): void {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }

    const key: number | null = keyHelper(DEL_KEY_ID);
    if (key === null) {
        return;
    }

    binaryTree.removeHelper(key, binaryTree.root);
    (document.getElementById(DEL_KEY_ID) as HTMLInputElement).value = "";
}

window.deleteNode = deleteNode;


function outputTree(): void {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }
    drawHelper.drawTree(binaryTree.root);
}

window.outputTree = outputTree;


function clearTree(): void {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }
    const canvas = <HTMLCanvasElement> document.getElementById("canvas-output");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    binaryTree.root = null;
}

window.clearTree = clearTree;


document.addEventListener("DOMContentLoaded", () => {
    alert("- Maximum tree depth (including root): 5 nodes.\n" +
        "- Maximum number of characters for data field: 10 characters.\n" +
        "- Keys can only be integers with a value of no more than 50.\n");
});
