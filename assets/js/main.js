(function(){
	var App = new Controller();

	App.checkLocal();
	
	document.querySelectorAll("input[type='submit']").forEach((el)=>{
		el.addEventListener("click", function(e){
			e.preventDefault();
			var index = el.parentNode.getAttribute('data-item');
			var task = el.parentNode.children[1].value;

			if(task != "")
			{
				App.addTask(index,task);
			}
		});
	});

	/*************************************************************************************************************/

	var date = new Date();
	document.querySelector('h1').innerHTML = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
	
	/*************************************************************************************************************/
	setInterval(setTime,1000);
	
	function setTime()
	{
		var date = new Date();
		var hours = (24 - date.getHours()) < 10 ? "0" + (24 - date.getHours()) : (24 - date.getHours());
		var minutes = (59 - date.getMinutes()) < 10 ? "0" + (59 - date.getMinutes()) : (59 - date.getMinutes());
		var seconds = (59 - date.getSeconds()) < 10 ? "0" + (59 - date.getSeconds()) : (59 - date.getSeconds());;

		var time = hours + ":" + minutes + ":" + seconds;
		document.querySelector('h2').innerHTML = time;
	}
	/*************************************************************************************************************/
})();