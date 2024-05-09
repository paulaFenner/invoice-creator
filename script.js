import { tasks } from './data.js';
import * as footer from './layout/footer.js';

// ELEMENT REFERENCES -----------------------------------------------------------
const existingTasksEl = document.querySelector('.existing-tasks');
const btnAddTaskEl = document.getElementById('btn-add-task');
const taskNameEl = document.getElementById('task-name');

// EVENTS -----------------------------------------------------------------------
existingTasksEl.addEventListener('click', renderTasks);
btnAddTaskEl.addEventListener('click', renderTasks, appendTask);

// FUNCTION CALLS ---------------------------------------------------------------
populateExistingTasks();

// FUNCTIONS --------------------------------------------------------------------
// TASKS CONTAINER
function populateExistingTasks() {
  existingTasksEl.innerHTML = '';

  tasks.forEach((task) => {
    // Create button element for each task
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = `
    ${task.title}: €${task.price}
    `;

    // Append button to existingTasksContainer
    existingTasksEl.appendChild(button);
  });
}

function appendTask() {}

// INVOICE CONTAINER
// Generate HTML for tasks
function getTasksHtml(task) {
  return `
  <li>
  <p>${task.title}</p>
  <button id=btn-remove>X</button>
  <p><span>€</span> ${task.price}</p>
</li>
  `;
}

function renderTasks() {}
