let stack = {
	elements: [],
	stackSize: 10,
	currentItem: 0,
	lastOperation: '',
	lastOperationValue: '',
	
	pushElement(elem) {
		this.elements.push(elem);
		this.currentItem++;
	},
	getElement() {
		let elem = this.elements.pop();
		this.currentItem -= 1;
		return elem;
	}
}

export {stack};