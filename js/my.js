;(function(window, document, undefined){
	document.querySelector('.box').addEventListener('click', function(e) {
		console.log([this, 'click on box']);
		document.querySelector('.red').classList.add('red-top');
	}, false);

	document.querySelector('.red').addEventListener('click', function(e) {
		this.classList.remove('red-top');
	}, false);
})(window, document);