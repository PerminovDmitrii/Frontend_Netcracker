let stack = {
	elements: [],
	stackSize: 10,
	currentItem: 0,
	
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
	if (document.getElementById('entry-field').value == "") {
		alert('Entry field is empty!');
		return;
	}
	if (stack.currentItem < 10) { 
		let elem = document.getElementById('entry-field').value;
		stack.pushElement(elem);
		document.getElementById(`${stack.currentItem - 1}`).innerHTML = elem;
		document.getElementById('entry-field').value = "";
		document.getElementById(`${stack.currentItem - 1}`).style.background = '#190018';
	} else {
		document.getElementById('entry-field').value = "";
		alert('Stack full!');
	}
}

function getElement(stack) {
	console.log(stack);
	if (stack.currentItem != 0) {
		 document.getElementById('output-field').innerHTML = stack.getElement();
		 document.getElementById(`${stack.currentItem}`).style.background = '#ffffff';
	} else {
		document.getElementById('output-field').innerHTML = "";
		alert('Stack empty!');
	}
}