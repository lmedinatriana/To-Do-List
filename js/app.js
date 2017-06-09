var userSubmit = document.querySelector('#user-submit');
var toDoList = document.querySelector('#to-do-list');

function addToDo(event){
	event.preventDefault(); //Whatever you do, DO NOT do it

	var userInput = document.querySelector('#user-input');
	if (userInput.value === '') { //empty string
		return false;
	}

	// toDoList.innerHTML += '<li>' + userInput.value + '</li>';//it adds the input on the html page
	toDoList.innerHTML = '<li>' + userInput.value + ' <span class="fa fa-window-close close-to-do" aria-hidden="true"></span> </li>' + toDoList.innerHTML;
	userInput.value = '' ; // it makes an empty box after submit
}

function removeToDo (event) {
	if (event.target.classList.contains('close-to-do')) {
		var li = event.target.parentElement;
		toDoList.removeChild(li);
		console.log(li);
	}
}

toDoList.addEventListener('click', removeToDo, false);
userSubmit.addEventListener('click', addToDo, false);