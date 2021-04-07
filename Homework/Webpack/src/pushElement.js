export function pushElement(stack) {
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