(function(){
	var App = new Controller();
	
	document.querySelectorAll("input[type='submit']").forEach((el)=>{
		el.addEventListener("click", function(e){
			e.preventDefault();
			var index = el.parentNode.getAttribute('data-item');
			var task = el.parentNode.children[1].value;

			App.addTask(index,task);
		});
	});

	var date = new Date();
	document.querySelector('h1').innerHTML = date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear();

	window.addEventListener('onbeforeunload', function(){
		if(App.model.sixList != null)
		{
			
		}

	});
})();