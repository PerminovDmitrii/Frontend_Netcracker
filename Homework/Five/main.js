function mainFunc() {
    let parent = document.getElementById('entry-field__parent').value;
    if (tagValidation(parent, 'parent') == 'error') {
        return;
    }
    let elem = document.getElementById('entry-field__child').value;
    let quantity = +document.getElementById('entry-field__quantity').value;
    
    if ( quantityValidation(quantity) ) {
        return;
    }
    incertHtmlElement(parent)(elem)(quantity);
}

function incertHtmlElement(parent) {
    return (elem) => {
        return (quantity) => {
            let parentElement = getParentHtmlElement(parent);
            for (let i = 0; i < quantity; i++) {
                let newElement = createHtmlElement(elem);
                if (newElement == 'error') {
                    return;
                }
                let deleteButton = createDeleteButton();
                newElement.appendChild(deleteButton);
                parentElement.appendChild(newElement);
            }
            return;
        }
    }
}

function createDeleteButton() {
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete this element";
    deleteButton.addEventListener("click", deleteElement);
    return deleteButton;
}

function createHtmlElement(elem) {
    if (tagValidation(elem, 'child') == false) {
        return 'error';
    }
    let newElement = document.createElement(elem);
    newElement.className = 'main-element__new-element';
    return newElement;
}

function getParentHtmlElement(parent) {
    let listOfElementsByParentTag = document.querySelectorAll(parent);
    let quantityOfElements = listOfElementsByParentTag.length;
    let parentElement = listOfElementsByParentTag[quantityOfElements - 1];
    return parentElement;
}

function deleteElement() {
    let deletedElement = this.parentElement;
    let parentElement = deletedElement.parentElement;
    parentElement.removeChild(deletedElement);
}

function tagValidation(tag, typeOfElement) {
    try {
        let testElement = document.createElement(tag);
        if (testElement instanceof HTMLUnknownElement) {
            alert(`Incorrect value in the ${typeOfElement} field!`);
            return false;
        } else {
            return true;
        }
    } catch (error) {
        alert (`The ${typeOfElement} field is empty!`);
    }
}

function quantityValidation(quantity) {
    if ( Number.isNaN(quantity) ) {
        alert("The value in the quantity field is not a number!");
        return false;
    } else if (quantity <= 0 || quantity > 5 || !( Number.isInteger(quantity) ) ) {
        alert("Incorrect value in the quantity field!");
        return false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    alert("Main element: div - it is specified by default in the form.\n" +
        "Each new element is added to the half-last parent with the specified tag.\n" +
        "The maximum number of added elements at a time: 5.");
});