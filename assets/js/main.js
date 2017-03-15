(function(){
	var App = new Controller();

	App.checkLocal();
	
	document.querySelectorAll("input[type='submit']").forEach((el)=>{
		App.submitTask(el);
	});

	/*************************************************************************************************************/

	var date = new Date();
	document.querySelector('h1').innerHTML = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
	
	/*************************************************************************************************************/
})();