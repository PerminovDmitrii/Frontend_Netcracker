function mainFunc() {
    let parent = document.getElementById('entry-field__parent').value;
    let elem = document.getElementById('entry-field__child').value;
    let quantity = +document.getElementById('entry-field__quantity').value;
    insertHtmlElement(parent)(elem)(quantity);
}

function insertHtmlElement(parent) {
    if (tagValidation(parent, 'parent') == false) {
        return;
    }
    
    let parentElement = getParentHtmlElement(parent);
    
    if (firsParentTagValidation(parentElement, parent) == false) {
        return;
    }
            
    if (parentValueValidation(parentElement) == false) {
        alert('Maximum nesting reached!');
        return;
    }
    
    return (elem) => {
        
        if (tagValidation(elem, 'child') == false) {
            return;
        }
        
        return (quantity) => {
            
            if (quantityValidation(quantity) == false) {
                return;
            }
            
            for (let i = 0; i < quantity; i++) {
                let newElement = createHtmlElement(elem);
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
    let newElement = document.createElement(elem);
    newElement.className = 'main-element__new-element';
    newElement.textContent = elem;
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
        }
    } catch(error) {
        if (tag == '') {
            alert (`The ${typeOfElement} field is empty!`);
        } else {
            alert(`Incorrect value in the ${typeOfElement} field!`);
        }
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

function parentValueValidation(parent) {
    let nestingCount = 0;
    while (parent.tagName != 'SECTION') {
        parent = parent.parentElement;
        nestingCount++;
    }
    if (nestingCount == 6) {
        return false;
    }
}

function firsParentTagValidation(parent, parentName) {
    try {
        if (parent.parentElement.tagName == 'SECTION' && parentName != 'div') {
            alert('The first parent should always be "div"!');
            return false;
        }
    } catch(error) {
        let mainElement = document.getElementsByClassName('main-element');
        let childNodes = mainElement[0].childNodes;
        if (childNodes.length == 0) {
            alert('The first parent should always be "div"!');
        } else {
            alert('The specified parent does not exist!');
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    alert("Main element: div - it is specified by default in the form.\n" +
        "Each new element is added to the half-last parent with the specified tag.\n" +
        "The maximum number of added elements at a time: 5.\n" +
        "Maximum nesting of elements: 5.");
});