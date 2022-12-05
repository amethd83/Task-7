

let createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
    <li data-task-id="${id}" class="list-group-item ">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <button type="button" class="delete-button btn btn-danger">Delete this task</button>
        <button type="button" class="done-button btn btn-success ${status === 'TODO' ? 'visible' : 'invisible'}">Mark as done</button>

    </li>
`;

  console.log(html);
}

class TaskManager {
  constructor(currentId) {
      this.tasks = [];
      this.currentId = currentId;
  }
  addTask(name, description, assignedTo, dueDate, status) {
      this.name = name;
      this.description = description;
      this.assignedTo = assignedTo;
      this.dueDate = dueDate;
      this.status = status;
      this.currentId++;

      let id = this.currentId;

      this.tasks.push(
          {
              id: this.currentId,
              name: name,
              description: description,
              assignedTo: assignedTo,
              dueDate: dueDate,
              status: status
          }
      );
  }
  render() {
      let tasksHtmlList = [];
      for (let i = 0; i < this.tasks.length; i++) {
          let currentTask = this.tasks[i];
          let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, currentTask.dueDate, currentTask.status);
          tasksHtmlList.push(taskHtml);
      }
      let tasksHtml = tasksHtmlList.join('\n');
      document.getElementById('taskList').innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    var foundTask = taskId;
    for (let i = 0; i < this.tasks.length; i++){

      let task = this.tasks[i];
      if (task.id == foundTask) {
        return task;

      }
    }
  }

}

console.log(TaskManager)

