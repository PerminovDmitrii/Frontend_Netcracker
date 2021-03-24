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
		this.currentItem-= 1;
		return elem;
	}
};

function pushElement(stack) {
	stack.lastOperation = 'push into';
	if (document.getElementById('entry-field').value == "") {
		alert('Entry field is empty!');
		return;
	}
	if (stack.currentItem < 10) { 
		let elem = document.getElementById('entry-field').value;
		stack.pushElement(elem);
		stack.lastOperationValue = elem;
		document.getElementById(`${stack.currentItem - 1}`).innerHTML = elem;
		document.getElementById('entry-field').value = "";
		document.getElementById(`${stack.currentItem - 1}`).style.background = '#190018';
	} else {
		document.getElementById('entry-field').value = "";
		alert('Stack full!');
	}
}

function getElement(stack) {
	try {
        let elem = stack.getElement();
		stack.lastOperationValue = elem;
		document.getElementById('output-field').innerHTML = elem;
		document.getElementById(`${stack.currentItem}`).style.background = '#ffffff';
		stack.lastOperation = 'get from';
    } catch(err) {
		stack.currentItem = 0;
		document.getElementById('output-field').innerHTML = "";
		alert('Stack empty!');
        console.log(err);
    }
}
