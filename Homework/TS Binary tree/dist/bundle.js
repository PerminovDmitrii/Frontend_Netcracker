/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binary-tree.ts":
/*!****************************!*\
  !*** ./src/binary-tree.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-node */ "./src/tree-node.ts");

var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.addNode = function (key, data, spreadByDepth) {
        var newNode = new _tree_node__WEBPACK_IMPORTED_MODULE_0__.default(data, key);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.recurceAddNode(newNode, this.root, spreadByDepth);
        }
    };
    BinaryTree.prototype.recurceAddNode = function (newNode, root, spreadByDepth) {
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
            }
            else {
                newNode.xPos -= spreadByDepth;
                newNode.yPos += 80;
                spreadByDepth = spreadByDepth / 2;
                this.recurceAddNode(newNode, root.leftChild, spreadByDepth);
            }
        }
        else if (newNode.key > root.key) {
            if (root.rightChild === null) {
                newNode.xPos += spreadByDepth;
                newNode.yPos += 80;
                root.rightChild = newNode;
            }
            else {
                newNode.xPos += spreadByDepth;
                newNode.yPos += 80;
                spreadByDepth = spreadByDepth / 2;
                this.recurceAddNode(newNode, root.rightChild, spreadByDepth);
            }
        }
        else {
            alert("Such a key already exists!");
            return;
        }
    };
    BinaryTree.prototype.removeHelper = function (key, root) {
        root = this.removeNode(this.root, key);
    };
    BinaryTree.prototype.removeNode = function (root, key) {
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
            var tempNode = root.rightChild.rightChild;
            root = root.rightChild;
            root.rightChild = tempNode;
            return root;
        }
        if (root.rightChild === null) {
            root.leftChild.xPos = root.xPos;
            root.leftChild.yPos = root.yPos;
            root.leftChild.depthLevel = root.depthLevel;
            var tempNode = root.leftChild.leftChild;
            root = root.leftChild;
            root.leftChild = tempNode;
            return root;
        }
        var newNode = this.searchMinNode(root.rightChild);
        newNode.xPos = root.xPos;
        newNode.yPos = root.yPos;
        newNode.depthLevel = root.depthLevel;
        var rightChild = root.rightChild;
        var leftChild = root.rightChild;
        root = newNode;
        root.rightChild = rightChild;
        root.leftChild = leftChild;
        newNode = null;
        return root;
    };
    BinaryTree.prototype.searchMinNode = function (root) {
        if (root.leftChild === null) {
            return root;
        }
        return this.searchMinNode(root.leftChild);
    };
    BinaryTree.prototype.searchNodeByKey = function (key, root) {
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
        }
        catch (err) {
            alert("There is no such key!");
            return null;
        }
    };
    BinaryTree.prototype.isHaveRoot = function (binaryTree) {
        if (binaryTree.root === null) {
            alert("The tree is not initialized!");
            return null;
        }
    };
    BinaryTree.prototype.travelModifTree = function (root) {
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
    };
    return BinaryTree;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BinaryTree);


/***/ }),

/***/ "./src/draw-helper.ts":
/*!****************************!*\
  !*** ./src/draw-helper.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DrawHelper = /** @class */ (function () {
    function DrawHelper() {
        this.spreadByDepth = 250;
    }
    DrawHelper.prototype.drawTree = function (root) {
        var tempPosArray = [];
        var posArray = [];
        posArray = this.createPosArray(root, tempPosArray);
        console.log(posArray);
        var canvas = document.getElementById("canvas-output");
        var ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var i = 0;
        while (i < posArray.length) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#ab";
            ctx.strokeRect(posArray[i + 1], posArray[i + 2], 60, 30);
            ctx.font = "20px Georgia";
            ctx.textAlign = "center";
            ctx.fillText("" + posArray[i], posArray[i + 1] + 30, posArray[i + 2] + 15);
            i += 3;
        }
    };
    DrawHelper.prototype.createPosArray = function (root, posArray) {
        if (root !== null) {
            posArray.push(root.key, root.xPos, root.yPos);
            this.createPosArray(root.leftChild, posArray);
            this.createPosArray(root.rightChild, posArray);
        }
        return posArray;
    };
    return DrawHelper;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawHelper);


/***/ }),

/***/ "./src/tree-node.ts":
/*!**************************!*\
  !*** ./src/tree-node.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TreeNode = /** @class */ (function () {
    function TreeNode(data, key) {
        this.data = data;
        this.key = key;
        this.data = data;
        this.key = key;
        this.leftChild = null;
        this.rightChild = null;
        this.depthLevel = 0;
        this.xPos = window.innerWidth / 2 - 60;
        this.yPos = 80;
    }
    return TreeNode;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeNode);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binary_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binary-tree */ "./src/binary-tree.ts");
/* harmony import */ var _draw_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-helper */ "./src/draw-helper.ts");


var binaryTree = new _binary_tree__WEBPACK_IMPORTED_MODULE_0__.default;
var drawHelper = new _draw_helper__WEBPACK_IMPORTED_MODULE_1__.default;
var ADD_KEY_ID = "entry-field__key";
var EXTR_KEY_ID = "entry-field__ext-key";
var DEL_KEY_ID = "entry-field__delete-key";
function keyHelper(id) {
    var key = Number(document.getElementById(id).value);
    if (key > 50 || key < 0 || key % 1 > 0 || Number.isNaN(key)) {
        alert("Invalid key value!");
        return null;
    }
    if (key === 0) {
        alert("Missing value in key field!");
        return null;
    }
    return key;
}
function addNode() {
    var key = keyHelper(ADD_KEY_ID);
    if (key === null) {
        return;
    }
    var data = document.getElementById("entry-field__data").value;
    if (data.length === 0) {
        alert("Missing value in data field!");
        return;
    }
    if (data.length > 10) {
        alert("Invalid data field length!");
        return;
    }
    binaryTree.addNode(key, data, drawHelper.spreadByDepth);
    drawHelper.drawTree(binaryTree.root);
    document.getElementById("entry-field__data").value = "";
    document.getElementById(ADD_KEY_ID).value = "";
}
window.addNode = addNode;
function extractingNode() {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }
    var key = keyHelper(EXTR_KEY_ID);
    if (key === null) {
        return;
    }
    var requiredNode = binaryTree.searchNodeByKey(key, binaryTree.root);
    if (requiredNode === null) {
        return;
    }
    var data = requiredNode.data;
    document.getElementById("output-field__ext-key").innerHTML = "Data: " + requiredNode.data;
    document.getElementById(EXTR_KEY_ID).value = "";
}
window.extractingNode = extractingNode;
function deleteNode() {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }
    var key = keyHelper(DEL_KEY_ID);
    if (key === null) {
        return;
    }
    binaryTree.removeHelper(key, binaryTree.root);
    drawHelper.drawTree(binaryTree.root);
    binaryTree.travelModifTree(binaryTree.root);
    document.getElementById(DEL_KEY_ID).value = "";
}
window.deleteNode = deleteNode;
function outputTree() {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }
    drawHelper.drawTree(binaryTree.root);
}
window.outputTree = outputTree;
function clearTree() {
    if (binaryTree.isHaveRoot(binaryTree) === null) {
        return;
    }
    var canvas = document.getElementById("canvas-output");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    binaryTree.root = null;
}
window.clearTree = clearTree;
document.addEventListener("DOMContentLoaded", function () {
    alert("- Maximum tree depth (including root): 5 nodes.\n" +
        "- Maximum number of characters for data field: 10 characters.\n" +
        "- Keys can only be integers with a value of no more than 50.\n");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktdHJlZS8uL3NyYy9iaW5hcnktdHJlZS50cyIsIndlYnBhY2s6Ly9iaW5hcnktdHJlZS8uL3NyYy9kcmF3LWhlbHBlci50cyIsIndlYnBhY2s6Ly9iaW5hcnktdHJlZS8uL3NyYy90cmVlLW5vZGUudHMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXRyZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXRyZWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JpbmFyeS10cmVlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXRyZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktdHJlZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFHbkM7SUFHSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSw0QkFBTyxHQUFkLFVBQWUsR0FBVyxFQUFFLElBQVksRUFBRSxhQUFxQjtRQUMzRCxJQUFNLE9BQU8sR0FBcUIsSUFBSSwrQ0FBUSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzFEO0lBQ0wsQ0FBQztJQUVPLG1DQUFjLEdBQXRCLFVBQXVCLE9BQXlCLEVBQUUsSUFBc0IsRUFBRSxhQUFxQjtRQUMzRixPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFD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RzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUMxQyxLQUFLLENBQUMsbURBQW1EO1FBQ3JELGlFQUFpRTtRQUNqRSxnRUFBZ0UsQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlTm9kZSBmcm9tIFwiLi90cmVlLW5vZGVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5hcnlUcmVlIHtcclxuICAgIHJvb3Q6IFRyZWVOb2RlPHN0cmluZz4gfCBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGROb2RlKGtleTogbnVtYmVyLCBkYXRhOiBzdHJpbmcsIHNwcmVhZEJ5RGVwdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGU6IFRyZWVOb2RlPHN0cmluZz4gPSBuZXcgVHJlZU5vZGUoZGF0YSwga2V5KTtcclxuICAgICAgICBpZiAodGhpcy5yb290ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5ld05vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWN1cmNlQWRkTm9kZShuZXdOb2RlLCB0aGlzLnJvb3QsIHNwcmVhZEJ5RGVwdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlY3VyY2VBZGROb2RlKG5ld05vZGU6IFRyZWVOb2RlPHN0cmluZz4sIHJvb3Q6IFRyZWVOb2RlPHN0cmluZz4sIHNwcmVhZEJ5RGVwdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIG5ld05vZGUuZGVwdGhMZXZlbCsrO1xyXG4gICAgICAgIGlmIChuZXdOb2RlLmRlcHRoTGV2ZWwgPiA0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTWF4aW11bSB0cmVlIGRlcHRoIHJlYWNoZWQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdOb2RlLmtleSA8IHJvb3Qua2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChyb290LmxlZnRDaGlsZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS54UG9zID0gbmV3Tm9kZS54UG9zIC0gc3ByZWFkQnlEZXB0aDtcclxuICAgICAgICAgICAgICAgIG5ld05vZGUueVBvcyA9IG5ld05vZGUueVBvcyArIDgwO1xyXG4gICAgICAgICAgICAgICAgcm9vdC5sZWZ0Q2hpbGQgPSBuZXdOb2RlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS54UG9zIC09IHNwcmVhZEJ5RGVwdGg7XHJcbiAgICAgICAgICAgICAgICBuZXdOb2RlLnlQb3MgKz0gODA7XHJcbiAgICAgICAgICAgICAgICBzcHJlYWRCeURlcHRoID0gc3ByZWFkQnlEZXB0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3VyY2VBZGROb2RlKG5ld05vZGUsIHJvb3QubGVmdENoaWxkLCBzcHJlYWRCeURlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3Tm9kZS5rZXkgPiByb290LmtleSkge1xyXG4gICAgICAgICAgICAgaWYgKHJvb3QucmlnaHRDaGlsZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS54UG9zICs9IHNwcmVhZEJ5RGVwdGg7XHJcbiAgICAgICAgICAgICAgICBuZXdOb2RlLnlQb3MgKz0gODA7XHJcbiAgICAgICAgICAgICAgICByb290LnJpZ2h0Q2hpbGQgPSBuZXdOb2RlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLnhQb3MgKz0gc3ByZWFkQnlEZXB0aDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLnlQb3MgKz0gODA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkQnlEZXB0aCA9IHNwcmVhZEJ5RGVwdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdXJjZUFkZE5vZGUobmV3Tm9kZSwgcm9vdC5yaWdodENoaWxkLCBzcHJlYWRCeURlcHRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIlN1Y2ggYSBrZXkgYWxyZWFkeSBleGlzdHMhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVIZWxwZXIgKGtleTogbnVtYmVyLCByb290OiBUcmVlTm9kZTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgcm9vdCA9IHRoaXMucmVtb3ZlTm9kZSh0aGlzLnJvb3QsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVOb2RlKHJvb3Q6IFRyZWVOb2RlPHN0cmluZz4sIGtleTogbnVtYmVyKTogVHJlZU5vZGU8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2V5IDwgcm9vdC5rZXkpIHtcclxuICAgICAgICAgICAgcm9vdC5sZWZ0Q2hpbGQgPSB0aGlzLnJlbW92ZU5vZGUocm9vdC5sZWZ0Q2hpbGQsIGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiByb290O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5ID4gcm9vdC5rZXkpIHtcclxuICAgICAgICAgICAgcm9vdC5yaWdodENoaWxkID0gdGhpcy5yZW1vdmVOb2RlKHJvb3QucmlnaHRDaGlsZCwga2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb290LmxlZnRDaGlsZCA9PT0gbnVsbCAmJiByb290LnJpZ2h0Q2hpbGQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcm9vdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiByb290O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm9vdC5sZWZ0Q2hpbGQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcm9vdC5yaWdodENoaWxkLnhQb3MgPSByb290LnhQb3M7XHJcbiAgICAgICAgICAgIHJvb3QucmlnaHRDaGlsZC55UG9zID0gcm9vdC55UG9zO1xyXG4gICAgICAgICAgICByb290LnJpZ2h0Q2hpbGQuZGVwdGhMZXZlbCA9IHJvb3QuZGVwdGhMZXZlbDtcclxuICAgICAgICAgICAgY29uc3QgdGVtcE5vZGUgPSByb290LnJpZ2h0Q2hpbGQucmlnaHRDaGlsZDtcclxuICAgICAgICAgICAgcm9vdCA9IHJvb3QucmlnaHRDaGlsZDtcclxuICAgICAgICAgICAgcm9vdC5yaWdodENoaWxkID0gdGVtcE5vZGU7XHJcbiAgICAgICAgICAgIHJldHVybiByb290O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm9vdC5yaWdodENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJvb3QubGVmdENoaWxkLnhQb3MgPSByb290LnhQb3M7XHJcbiAgICAgICAgICAgIHJvb3QubGVmdENoaWxkLnlQb3MgPSByb290LnlQb3M7XHJcbiAgICAgICAgICAgIHJvb3QubGVmdENoaWxkLmRlcHRoTGV2ZWwgPSByb290LmRlcHRoTGV2ZWw7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBOb2RlID0gcm9vdC5sZWZ0Q2hpbGQubGVmdENoaWxkO1xyXG4gICAgICAgICAgICByb290ID0gcm9vdC5sZWZ0Q2hpbGQ7XHJcbiAgICAgICAgICAgIHJvb3QubGVmdENoaWxkID0gdGVtcE5vZGU7XHJcbiAgICAgICAgICAgIHJldHVybiByb290O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld05vZGUgPSB0aGlzLnNlYXJjaE1pbk5vZGUocm9vdC5yaWdodENoaWxkKTtcclxuICAgICAgICBuZXdOb2RlLnhQb3MgPSByb290LnhQb3M7XHJcbiAgICAgICAgbmV3Tm9kZS55UG9zID0gcm9vdC55UG9zO1xyXG4gICAgICAgIG5ld05vZGUuZGVwdGhMZXZlbCA9IHJvb3QuZGVwdGhMZXZlbDtcclxuICAgICAgICBjb25zdCByaWdodENoaWxkID0gcm9vdC5yaWdodENoaWxkO1xyXG4gICAgICAgIGNvbnN0IGxlZnRDaGlsZCA9IHJvb3QucmlnaHRDaGlsZDtcclxuICAgICAgICByb290ID0gbmV3Tm9kZTtcclxuICAgICAgICByb290LnJpZ2h0Q2hpbGQgPSByaWdodENoaWxkO1xyXG4gICAgICAgIHJvb3QubGVmdENoaWxkID0gbGVmdENoaWxkO1xyXG4gICAgICAgIG5ld05vZGUgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiByb290O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlYXJjaE1pbk5vZGUocm9vdDogVHJlZU5vZGU8c3RyaW5nPik6IFRyZWVOb2RlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmIChyb290LmxlZnRDaGlsZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoTWluTm9kZShyb290LmxlZnRDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaE5vZGVCeUtleShrZXk6IG51bWJlciwgcm9vdDogVHJlZU5vZGU8c3RyaW5nPik6IFRyZWVOb2RlPHN0cmluZz4gfCBudWxsIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSByb290LmtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtleSA+IHJvb3Qua2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlQnlLZXkoa2V5LCByb290LnJpZ2h0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChrZXkgPCByb290LmtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZUJ5S2V5KGtleSwgcm9vdC5sZWZ0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaXMgbm8gc3VjaCBrZXkhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSGF2ZVJvb3QoYmluYXJ5VHJlZTogQmluYXJ5VHJlZSk6IG51bGwge1xyXG4gICAgICAgIGlmIChiaW5hcnlUcmVlLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJUaGUgdHJlZSBpcyBub3QgaW5pdGlhbGl6ZWQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYXZlbE1vZGlmVHJlZShyb290OiBUcmVlTm9kZTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJvb3QubGVmdENoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJvb3QubGVmdENoaWxkLmRlcHRoTGV2ZWwgPSByb290LmRlcHRoTGV2ZWwgKyAxO1xyXG4gICAgICAgICAgICByb290LmxlZnRDaGlsZC54UG9zID0gcm9vdC54UG9zIC0gODA7XHJcbiAgICAgICAgICAgIHJvb3QubGVmdENoaWxkLnlQb3MgPSAocm9vdC5kZXB0aExldmVsICsgMikgKiA4MDtcclxuICAgICAgICAgICAgdGhpcy50cmF2ZWxNb2RpZlRyZWUocm9vdC5sZWZ0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm9vdC5yaWdodENoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJvb3QucmlnaHRDaGlsZC5kZXB0aExldmVsID0gcm9vdC5kZXB0aExldmVsICsgMTtcclxuICAgICAgICAgICAgcm9vdC5yaWdodENoaWxkLnhQb3MgPSByb290LnhQb3MgKyA4MDtcclxuICAgICAgICAgICAgcm9vdC5yaWdodENoaWxkLnlQb3MgPSAocm9vdC5kZXB0aExldmVsICsgMikgKiA4MDtcclxuICAgICAgICAgICAgdGhpcy50cmF2ZWxNb2RpZlRyZWUocm9vdC5yaWdodENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFRyZWVOb2RlIGZyb20gXCIuL3RyZWUtbm9kZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3SGVscGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3ByZWFkQnlEZXB0aDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnNwcmVhZEJ5RGVwdGggPSAyNTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXdUcmVlKHJvb3Q6IFRyZWVOb2RlPHN0cmluZz4pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ZW1wUG9zQXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IHBvc0FycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIHBvc0FycmF5ID0gdGhpcy5jcmVhdGVQb3NBcnJheShyb290LCB0ZW1wUG9zQXJyYXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc0FycmF5KTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW91dHB1dFwiKTtcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgcG9zQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNhYlwiO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdChwb3NBcnJheVtpICsgMV0sIHBvc0FycmF5W2kgKyAyXSwgNjAsIDMwKTtcclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHggR2VvcmdpYVwiO1xyXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3Bvc0FycmF5W2ldfWAsIHBvc0FycmF5W2kgKyAxXSArIDMwLCBwb3NBcnJheVtpICsgMl0gKyAxNSk7XHJcbiAgICAgICAgICAgIGkgKz0gMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQb3NBcnJheShyb290OiBUcmVlTm9kZTxzdHJpbmc+LCBwb3NBcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XHJcbiAgICAgICAgaWYgKHJvb3QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcG9zQXJyYXkucHVzaChyb290LmtleSwgcm9vdC54UG9zLCByb290LnlQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBvc0FycmF5KHJvb3QubGVmdENoaWxkLCBwb3NBcnJheSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9zQXJyYXkocm9vdC5yaWdodENoaWxkLCBwb3NBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NBcnJheTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZTxUPiB7XHJcbiAgICBsZWZ0Q2hpbGQ6IFRyZWVOb2RlPFQ+IHwgbnVsbDtcclxuICAgIHJpZ2h0Q2hpbGQ6IFRyZWVOb2RlPFQ+IHwgbnVsbDtcclxuICAgIGRlcHRoTGV2ZWw6IG51bWJlcjtcclxuICAgIHhQb3M6IG51bWJlcjtcclxuICAgIHlQb3M6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGRhdGE6IFQsIHB1YmxpYyBrZXk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmlnaHRDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZXB0aExldmVsID0gMDtcclxuICAgICAgICB0aGlzLnhQb3MgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSA2MDtcclxuICAgICAgICB0aGlzLnlQb3MgPSA4MDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCaW5hcnlUcmVlIGZyb20gXCIuL2JpbmFyeS10cmVlXCI7XHJcbmltcG9ydCBEcmF3SGVscGVyIGZyb20gXCIuL2RyYXctaGVscGVyXCI7XHJcbmltcG9ydCBUcmVlTm9kZSBmcm9tIFwiLi90cmVlLW5vZGVcIjtcclxuXHJcbmNvbnN0IGJpbmFyeVRyZWUgPSBuZXcgQmluYXJ5VHJlZTtcclxuY29uc3QgZHJhd0hlbHBlciA9IG5ldyBEcmF3SGVscGVyO1xyXG5jb25zdCBBRERfS0VZX0lEOiBzdHJpbmcgPSBcImVudHJ5LWZpZWxkX19rZXlcIjtcclxuY29uc3QgRVhUUl9LRVlfSUQ6IHN0cmluZyA9IFwiZW50cnktZmllbGRfX2V4dC1rZXlcIjtcclxuY29uc3QgREVMX0tFWV9JRDogc3RyaW5nID0gXCJlbnRyeS1maWVsZF9fZGVsZXRlLWtleVwiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgYWRkTm9kZTogRnVuY3Rpb247XHJcbiAgICAgICAgZXh0cmFjdGluZ05vZGU6IEZ1bmN0aW9uO1xyXG4gICAgICAgIGRlbGV0ZU5vZGU6IEZ1bmN0aW9uO1xyXG4gICAgICAgIG91dHB1dFRyZWU6IEZ1bmN0aW9uO1xyXG4gICAgICAgIGNsZWFyVHJlZTogRnVuY3Rpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleUhlbHBlcihpZDogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBjb25zdCBrZXk6IG51bWJlciA9IE51bWJlciggKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSApO1xyXG4gICAgaWYgKCBrZXkgPiA1MCB8fCBrZXkgPCAwIHx8IGtleSAlIDEgPiAwIHx8IE51bWJlci5pc05hTihrZXkpICkge1xyXG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCBrZXkgdmFsdWUhXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleSA9PT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KFwiTWlzc2luZyB2YWx1ZSBpbiBrZXkgZmllbGQhXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTm9kZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleTogbnVtYmVyIHwgbnVsbCA9IGtleUhlbHBlcihBRERfS0VZX0lEKTtcclxuICAgIGlmIChrZXkgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YTogc3RyaW5nID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50cnktZmllbGRfX2RhdGFcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBhbGVydChcIk1pc3NpbmcgdmFsdWUgaW4gZGF0YSBmaWVsZCFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMTApIHtcclxuICAgICAgICBhbGVydChcIkludmFsaWQgZGF0YSBmaWVsZCBsZW5ndGghXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5hcnlUcmVlLmFkZE5vZGUoa2V5LCBkYXRhLCBkcmF3SGVscGVyLnNwcmVhZEJ5RGVwdGgpO1xyXG4gICAgZHJhd0hlbHBlci5kcmF3VHJlZShiaW5hcnlUcmVlLnJvb3QpO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50cnktZmllbGRfX2RhdGFcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBcIlwiO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFERF9LRVlfSUQpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxud2luZG93LmFkZE5vZGUgPSBhZGROb2RlO1xyXG5cclxuZnVuY3Rpb24gZXh0cmFjdGluZ05vZGUoKTogdm9pZCB7XHJcbiAgICBpZiAoYmluYXJ5VHJlZS5pc0hhdmVSb290KGJpbmFyeVRyZWUpID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleTogbnVtYmVyIHwgbnVsbCA9IGtleUhlbHBlcihFWFRSX0tFWV9JRCk7XHJcbiAgICBpZiAoa2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkTm9kZTogVHJlZU5vZGU8c3RyaW5nPiB8IG51bGwgPSBiaW5hcnlUcmVlLnNlYXJjaE5vZGVCeUtleShrZXksIGJpbmFyeVRyZWUucm9vdCk7XHJcbiAgICBpZiAocmVxdWlyZWROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YTogc3RyaW5nID0gcmVxdWlyZWROb2RlLmRhdGE7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXQtZmllbGRfX2V4dC1rZXlcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IGBEYXRhOiAke3JlcXVpcmVkTm9kZS5kYXRhfWA7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRVhUUl9LRVlfSUQpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxud2luZG93LmV4dHJhY3RpbmdOb2RlID0gZXh0cmFjdGluZ05vZGU7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVOb2RlKCk6IHZvaWQge1xyXG4gICAgaWYgKGJpbmFyeVRyZWUuaXNIYXZlUm9vdChiaW5hcnlUcmVlKSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXk6IG51bWJlciB8IG51bGwgPSBrZXlIZWxwZXIoREVMX0tFWV9JRCk7XHJcbiAgICBpZiAoa2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmFyeVRyZWUucmVtb3ZlSGVscGVyKGtleSwgYmluYXJ5VHJlZS5yb290KTtcclxuICAgIGRyYXdIZWxwZXIuZHJhd1RyZWUoYmluYXJ5VHJlZS5yb290KTtcclxuICAgIGJpbmFyeVRyZWUudHJhdmVsTW9kaWZUcmVlKGJpbmFyeVRyZWUucm9vdCk7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoREVMX0tFWV9JRCkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG53aW5kb3cuZGVsZXRlTm9kZSA9IGRlbGV0ZU5vZGU7XHJcblxyXG5cclxuZnVuY3Rpb24gb3V0cHV0VHJlZSgpOiB2b2lkIHtcclxuICAgIGlmIChiaW5hcnlUcmVlLmlzSGF2ZVJvb3QoYmluYXJ5VHJlZSkgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkcmF3SGVscGVyLmRyYXdUcmVlKGJpbmFyeVRyZWUucm9vdCk7XHJcbn1cclxuXHJcbndpbmRvdy5vdXRwdXRUcmVlID0gb3V0cHV0VHJlZTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhclRyZWUoKTogdm9pZCB7XHJcbiAgICBpZiAoYmluYXJ5VHJlZS5pc0hhdmVSb290KGJpbmFyeVRyZWUpID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1vdXRwdXRcIik7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYmluYXJ5VHJlZS5yb290ID0gbnVsbDtcclxufVxyXG5cclxud2luZG93LmNsZWFyVHJlZSA9IGNsZWFyVHJlZTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhbGVydChcIi0gTWF4aW11bSB0cmVlIGRlcHRoIChpbmNsdWRpbmcgcm9vdCk6IDUgbm9kZXMuXFxuXCIgK1xyXG4gICAgICAgIFwiLSBNYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGZvciBkYXRhIGZpZWxkOiAxMCBjaGFyYWN0ZXJzLlxcblwiICtcclxuICAgICAgICBcIi0gS2V5cyBjYW4gb25seSBiZSBpbnRlZ2VycyB3aXRoIGEgdmFsdWUgb2Ygbm8gbW9yZSB0aGFuIDUwLlxcblwiKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=