'use strict';

const newList = document.getElementById('added-contact');
const form = document.getElementById('form');
const inputFirstName = document.getElementById('input-first');
const inputLastName = document.getElementById('input-last');
const inputNumber = document.getElementById('input-number');
const button = document.getElementById('btn');

let inputFirstValue = null;
let inputLastValue = null;
let inputNumberValue = null;

button.addEventListener('click', addContact);

function addContact(e) {
  e.preventDefault();
  getInputValue();
  checkInputs();
  addInfo();
  clearInput();
}

function getInputValue() {
  inputFirstValue = inputFirstName.value;
  inputLastValue = inputLastName.value;
  inputNumberValue = inputNumber.value;
}

function checkInputs() {
  if (inputFirstValue.length === 0) {
    alert('Please, Insert First Name');
    return false;
  }

  if (inputLastValue.length === 0) {
    alert('Please, Insert Last Name');
    return false;
  }

  if (inputNumberValue.length === 0 || isNaN(inputNumberValue)) {
    alert('Please, Insert Phone Number');
    return false;
  }
}

function addInfo() {
  if (checkInputs() == false) {
    return;
  } else {
    const newTr = document.createElement('tr');

    const newTdFirstName = document.createElement('td');
    const newTdLastName = document.createElement('td');
    const newTdNumber = document.createElement('td');
    const newTdDelete = document.createElement('td');
    const newTdDeleteText = document.createTextNode('X');

    newTr.classList.add('newTr');
    newTdDelete.classList.add('delete-btn');

    newTdFirstName.append(inputFirstValue);
    newTdLastName.append(inputLastValue);
    newTdNumber.append(inputNumberValue);
    newTdDelete.append(newTdDeleteText);

    newTr.append(newTdFirstName);
    newTr.append(newTdLastName);
    newTr.append(newTdNumber);
    newTr.append(newTdDelete);

    newList.append(newTr);

    newTr.addEventListener('click', deleteElement);

    function deleteElement() {
      newTr.remove()
    }
  }
}

function clearInput() {
  inputFirstName.value = "";
  inputLastName.value = "";
  inputNumber.value = "";
}


