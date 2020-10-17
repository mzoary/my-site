let likeClick = document.querySelector('.like');
let likes = document.querySelector('.likes');
let count = 0;
likeClick.onclick = function (){
	if (likeClick.classList.contains('added')) {
		likes.textContent--;
		likeClick.classList.toggle('not-added');
		likeClick.classList.remove('added')}
	else {
		likes.textContent++;
		likeClick.classList.toggle('added');
		likeClick.classList.remove('not-added')};
}