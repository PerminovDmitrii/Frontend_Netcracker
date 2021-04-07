export function getElement(stack) {
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
