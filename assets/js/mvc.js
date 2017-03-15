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

	editTask(_task)
	{
		var a = document.querySelector('ul').children[_task.index];
		var b = document.createElement('input');
			b.setAttribute('type', 'submit');
			b.setAttribute('value', '+');
			b.setAttribute('class', 'add btn btn-link');
		var c = document.createElement('input');
			c.setAttribute('type', 'text');
			c.setAttribute('value', _task.task);

			a.appendChild(b);
			a.appendChild(c);

			return a;
	}

	commitTask(_task, complete)
	{
		var taskIndex = document.querySelector('ul').children[_task.index];

		var task = document.createElement('span');
			task.innerHTML = _task.task;

		if(complete == false)
		{
			var menuToggle = document.createElement('input');
				menuToggle.setAttribute('type','checkbox');

				taskIndex.appendChild(menuToggle);
				taskIndex.appendChild(task);

			return menuToggle;
		}
		else if(complete == true)
		{
			task.className = "complete";
			taskIndex.appendChild(task);
		}
	}

	microUtils(element)
	{
		var a = document.createElement('ul');
			a.setAttribute('class', 'microUtils');

		var b = document.createElement('li');
			b.innerHTML = "Complete";

		var c = document.createElement('li');
			c.innerHTML = "Edit";


		// var d = document.createElement('li');
		// 	d.innerHTML = "Steps";
		// 	d.addEventListener("click", function(e){
		// 		window.location.href = "steps.php";
		// 	});

			a.appendChild(b);
			a.appendChild(c);
			// a.appendChild(d);

		return a;
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

	submitTask(el)
	{
			el.addEventListener("click", (e)=>{
			e.preventDefault();
			var index = el.parentNode.getAttribute('data-item');
			var task = el.parentNode.children[1].value;

			if(task != "")
			{
				let newTask = new Task(index,task);
				this.taskHandler([newTask]);
			}
		});
	}

	taskHandler(arr)
	{
		arr.forEach((el)=>{
			if(el != null)
			{
				if(this.model.sixList[el.index] == null)
				{
					this.model.sixList.splice(el.index, 0, el);
				}
				else
				{
					this.model.sixList.splice(el.index, 1, el);
				}
				this.view.removeTaskInput(el);

				if(el.complete != true)
				{
					var menuToggle = this.view.commitTask(el,false);
					menuToggle.addEventListener('click', (e)=>{
					 	var state = menuToggle.checked;
					 	this.toggleMicroUtils(state, menuToggle);
				 	});
				}
				else
				{
					this.view.commitTask(el,true);
				}
			}
		});

		this.model.checkIn();
	}

	toggleMicroUtils(bool, el)
	{
		var that = this;
		var microUtils = this.view.microUtils(el);
			microUtils.children[0].addEventListener('click', function(e){
				var item = e.target.parentNode.parentNode;
				var index = item.getAttribute('data-item');
				item.removeChild(item.children[0]);
				item.removeChild(item.children[1]);
				item.children[0].setAttribute('class','complete');
				
				that.model.sixList[index].complete = true;
				that.model.checkIn();
			});
			microUtils.children[1].addEventListener('click', function(e){
				var index = el.parentNode.getAttribute('data-item');
				var task = that.model.sixList[index];
				that.view.removeTaskInput(task);
				var newEl = that.view.editTask(task);
				that.submitTask(newEl.children[0]);
			});
		bool === true? el.parentNode.appendChild(microUtils) : el.parentNode.removeChild(el.parentNode.lastChild);
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

