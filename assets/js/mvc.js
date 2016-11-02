class Model
{
	constructor()
	{
		console.log("Model Created");
		this.sixList = new Array(6);
	}
}

class View 
{
	constructor()
	{
		console.log("View Created");
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

	addTask(_index,_task)
	{
		let addTask = new Task(_index,_task);
		this.model.sixList.splice(addTask.index, 0, addTask);
		console.log(addTask.index + " " + addTask.task);
		console.log(this.model.sixList[addTask.index]);
	}
}

class Task
{
	constructor(_index,_task)
	{
		console.log("New Task Created");
		this.index = _index;
		this.task = _task;
	}
}

