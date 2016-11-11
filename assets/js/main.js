(function(){
	var App = new Controller();

	App.checkLocal();
	
	document.querySelectorAll("input[type='submit']").forEach((el)=>{
		el.addEventListener("click", (e)=>{
			e.preventDefault();
			var index = el.parentNode.getAttribute('data-item');
			var task = el.parentNode.children[1].value;

			if(task != "")
			{
				let newTask = new Task(index,task);
				App.taskHandler([newTask]);
			}
		});
	});

	/*************************************************************************************************************/

	document.querySelectorAll("input[type='checkBox']").forEach((el)=>{
		el.addEventListener('click', (e)=>{
			var state;
			el.checked ? state = true : state = false;
			App.toggleMicroUtils(state, el);
		});
	});

	/*************************************************************************************************************/

	var date = new Date();
	document.querySelector('h1').innerHTML = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
	
	/*************************************************************************************************************/
})();