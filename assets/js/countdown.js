/*
	This function was placed in the head, so the timer would render with the rest of the html document
	and not at a delayed pace, after the content has already been rendered.
*/
(function(){
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