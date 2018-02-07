//create an object
function multiply(num1,num2) {
	var result = num1 * num2;
	return result;
}

var myHeading = document.querySelector('h1');

	myHeading.textContent = 'not clicked';


document.querySelector('html').onclick = function() {
	myHeading.textContent = 'lightbulb!';
}

