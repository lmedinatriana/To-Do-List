var userSubmit = document.querySelector('#user-submit');

function addToDo(event){
	event.preventDefault(); //Whatever you do, DO NOT do it

	var userInput = document.querySelector('#user-input');
	var toDoList = document.querySelector('#to-do-list');
	
	if (userInput.value === '') { //empty string
		return false;
	}

	// toDoList.innerHTML += '<li>' + userInput.value + '</li>';//it adds the input on the html page
	toDoList.innerHTML = '<li>' + userInput.value + '</li>' + toDoList.innerHTML;
	userInput.value = '' ; // it makes an empty box after submit
}



userSubmit.addEventListener('click', addToDo, false);