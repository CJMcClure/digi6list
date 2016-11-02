(function(){
	var App = new Controller();
	
	document.querySelectorAll("input[type='submit']").forEach((el)=>{
		el.addEventListener("click", function(e){
			e.preventDefault();
			var index = el.parentNode.getAttribute('data-item');
			var task = el.parentNode.childNodes[1].value;

			App.addTask(index,task);
		});
	});

	window.addEventListener('onbeforeunload', function(){
		//Save the sixlist object to localstorage
	});
})();