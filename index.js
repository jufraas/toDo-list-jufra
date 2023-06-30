const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  if (taskInput.value !== '') {
    const newTask = document.createElement('li');
    const newTaskText = document.createElement('span');
    const check = document.createElement('input');
    const deleteButton = document.createElement('img');

    check.type = 'checkbox';
    check.classList.add('checkbox');

    newTaskText.innerText = taskInput.value;
    newTask.appendChild(check);
    newTask.appendChild(newTaskText);

    check.addEventListener('click', () => {
      newTaskText.classList.toggle('completed');
    });

    deleteButton.classList.add('canecasvg');
    deleteButton.src = './svg/caneca.svg';
    deleteButton.width = 20;
    deleteButton.height = 20;
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
  }
});