let comment = document.querySelector('#mytemplate');
let span = document.querySelector('#name');
let p = document.querySelector('.writeField');
let form = document.querySelector('.form-page2');
let email = document.querySelector('#email');
form.onsubmit = function(evt) {
	evt.preventDefault();
	comment.content.querySelector('span').textContent=span.value;
	comment.content.querySelector('p').textContent = p.value;
	document.querySelector('.chat').appendChild(comment.content.cloneNode(true));
	span.value = '';
	email.value='';
	p.value='';
}
