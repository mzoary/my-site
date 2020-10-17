let articles = document.querySelectorAll('.all-states');
let select = document.querySelector('select')

select.onchange = function() {
	for (let article of articles) {
	if (article.dataset.tag !== select.value && select.value!=='Все статьи') {
		article.classList.add('hidden');}
		else {article.classList.remove('hidden')}
	}

}