class Model
{
	constructor()
	{
		console.log("Model Created");
		this.sixList = new Array(6);
	}

	checkIn()
	{
		var data = JSON.stringify(this.sixList); 
		localStorage.setItem('list',data);
	}
}

class View 
{
	constructor()
	{
		console.log("View Created");
	}

	removeTaskInput(_task)
	{
		var taskCon = document.querySelector('ul').children[_task.index];
		while(taskCon.hasChildNodes())
		{
			taskCon.removeChild(taskCon.firstChild);
		}
	}

	commitTask(_task)
	{
		var taskIndex = document.querySelector('ul').children[_task.index];

		var task = document.createElement('span');
			task.innerHTML = _task.task;

		var complete = document.createElement('input');
			complete.setAttribute('type','checkbox');

			taskIndex.appendChild(complete);
			taskIndex.appendChild(task);
	}
}

class Controller
{
	constructor()
	{
		console.log("Controller Created");
		this.model = new Model();
		this.view = new View();
	}

	checkLocal()
	{
		if(localStorage.getItem('list'))
		{
			var tasks = JSON.parse(localStorage.getItem('list'));
			this.taskHandler(tasks);
		}
	}

	taskHandler(arr)
	{
		arr.forEach((el)=>{
			if(el != null)
			{
				this.model.sixList.splice(el.index, 0, el);
				this.view.removeTaskInput(el);
				this.view.commitTask(el);
			}
		});

		this.model.checkIn();
	}
}

class Task
{
	constructor(_index,_task)
	{
		console.log("New Task Created");
		this.index = _index;
		this.task = _task;
		this.complete = false;
	}
}

