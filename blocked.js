let mainForm = document.querySelector('.main-form');
let message = document.querySelector('.writeField');
let submit = document.querySelector('.submit')


message.oninput = function (){
	if (message.value.length < message.getAttribute('minlength') || message.value.length > message.getAttribute('maxlength')){
		message.style.color="red";
		submit.disabled = true}
		else {message.style.color="black";
		submit.disabled = false}

	
	
};