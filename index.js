/*var tasksList = document.querySelector("#taskList");

tasksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done-button')) {
    const parentTask = event.target.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    const task = document.getTaskById(taskId);
    task.status = 'DONE';
    TaskManager.render();



    console.log(parentTask);

  }

});*/

let tasksList = document.querySelector('#taskList');
tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-btn')){
        let parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask);
        let taskId = Number(parentTask.id);
        console.log(taskId);
        let task = task1.getTaskById(taskId);
        task.status = 'DONE';
        task1.render();
        
    }
})
