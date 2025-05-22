import "./style.css";
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { format, compareAsc, parseISO, isValid, formatDistanceToNow } from "date-fns";

// Format the date in a readable format for display
function formatDate(dateString) {
    const date = parseISO(dateString);
    if (!isValid(date)) {
        return 'Invalid Date';
    }
    return format(date, 'MMM dd, yyyy');
}

// Get relative time (e.g., "2 days ago", "in 3 days")
function getRelativeTime(dateString) {
    const date = parseISO(dateString);
    if (!isValid(date)) {
        return 'Invalid Date';
    }
    return formatDistanceToNow(date, { addSuffix: true });
}

// Sort todos by date
function sortByDate(todos) {
    return todos.sort((a, b) => compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)));
}

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

// Dark mode toggle logic
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const content = document.querySelector('#content');
const linkSelector = content.querySelectorAll('a');
/* Removed these two lines to select dynamically inside displayProjects */
// const gridTemp = document.querySelector('.grid-container');
// const displayParent = document.querySelector('.projectJsParent');
const addTodoButton = document.querySelector('.addTodoButton');
const projectArray = [];

//project object
class Project {
  constructor (project) {
    this.project = project;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }  
}

// create todo constructor
class Todo {
  constructor (title, description, dueDate, priority, notes) {
     this.title = title;
     this.description = description;
     this.dueDate = dueDate;
     this.priority = priority;
     this.notes = notes;
  } 
  saveTodo(project) {
    project.addTodo(this);
  }
}

// helper function to find project by name
function findProjectByName(name) {
  return projectArray.find(proj => proj.project === name);
}

// function to create and add new project to projectArray
function createProject(name) {
  const newProject = new Project(name);
  projectArray.push(newProject);
  return newProject;
}

// example usage
const vic = createProject('victor');
const yes = new Todo('Esther', 'my wife', '2025-12-06', 'high', 'its her birthday');
const no = new Todo('Ett', 'tt', '2025-12-06', 'medium', 'its her birthday');
yes.saveTodo(vic);
no.saveTodo(vic);

const name = createProject('name');
const nam = new Todo('Eii', 'mfe', '2025-12-06', 'low', 'itsrthday');
nam.saveTodo(name);
console.log(projectArray);

console.log(vic);

// display sidebar
function sideBar () {
  // create the container
  const gridContainer = document.createElement('div');
  gridContainer.setAttribute('class', 'grid-container px-3');
  // aside
  const aside = document.createElement('aside');
  aside.setAttribute('class', 'd-flex flex-column p-3 bg-light border-end');
  aside.style.width = '250px';
  aside.style.position = 'fixed';
  aside.style.top = '56px';
  aside.style.left = '0';
  aside.style.bottom = '50px';
  aside.style.overflowY = 'auto';
  const title = document.createElement('a');
  title.setAttribute('class', 'd-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none pb-3');
  title.innerHTML = `<span class="fs-4">Todo</span>`;
  const asideUl = document.createElement('ul');
  asideUl.id = 'ulNav';
  asideUl.setAttribute('class', 'nav nav-pills flex-column mb-auto');
  const asideLi1 = document.createElement('li');
  asideLi1.setAttribute('class', 'nav-item mt-3');
  const asideA1 = document.createElement('a');
  asideA1.setAttribute('class', 'nav-link text-dark tasks active');
  asideA1.innerHTML = `<i class="bi bi-speedometer2 me-2"></i>
                  All Tasks`;
  const asideLi2 = document.createElement('li');
  asideLi2.setAttribute('class', ' mt-3');
  const asideP = document.createElement('p');
  asideP.setAttribute('class', 'ms-3');
  asideP.innerHTML = `<i class="bi bi-journal-code me-2"></i>
                    Projects`;

// append all elements
  content.appendChild(gridContainer);
  gridContainer.appendChild(aside);
  aside.appendChild(title);
  aside.appendChild(asideUl);
  asideUl.appendChild(asideLi1);
  asideLi1.appendChild(asideA1);
  asideUl.appendChild(asideLi2);
  asideLi2.appendChild(asideP);

}

// display all todo
function displayProjects() {
  content.innerHTML = ''; 
  // create projectView
  const display = document.createElement('div');
  display.style.overflowY = 'auto';
  const header = document.createElement('h5');
  header.setAttribute('class', 'pt-4 px-3');
  header.innerHTML = `<i class="bi bi-list-task"></i> All Todo`;

  // Call sideBar once before the loop
  sideBar();

  const gridTemp = document.querySelector('.grid-container');
  if (!gridTemp) {
    console.error('grid-container element not found');
    return;
  }

  // Create projectJsParent if it doesn't exist
  let displayParent = document.querySelector('.projectJsParent');
  if (!displayParent) {
    displayParent = document.createElement('div');
    displayParent.className = 'projectJsParent';
    gridTemp.appendChild(displayParent);
  }

  displayParent.appendChild(header);
  displayParent.appendChild(display);
  
  projectArray.forEach((project, index) => {
    // Create list group for todos
    const todoList = document.createElement('div');
    todoList.className = 'd-grid';

    project.todos.forEach((todo, id) => {
      const todoItem = document.createElement('div');
      todoItem.className = 'project d-grid gap-3 container my-3';
      todoItem.style.gridTemplateColumns = '1fr 1fr 100px'

      // add priority styles
      if (todo.priority == 'low') {
        todoItem.classList.add('low');
      } else if (todo.priority == 'medium') {
        todoItem.classList.add('medium');
      } else {
        todoItem.classList.add('high')
      }

      // create edit button
      const button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.type = 'button';
      // Use unique id combining project index and todo index
      button.setAttribute('data-bs-toggle', 'collapse');
      button.setAttribute('data-bs-target', `#collapse${index}-${id}`);
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', `collapse${index}-${id}`);
      button.textContent = "Details";
    
      // Create collapse container for todos
      const collapseDiv = document.createElement('div');
      collapseDiv.id = `collapse${index}-${id}`;
      collapseDiv.className = 'collapse';

      todoItem.innerHTML = `
        <h5>${todo.title}</h5>
        <div>
          <i class="bi bi-calendar-event-fill"></i> ${formatDate(todo.dueDate)}
          <small class="text-muted ms-2">(${getRelativeTime(todo.dueDate)})</small>
        </div>`;

      // Populate collapseDiv with todo details and add Edit and Delete buttons
      collapseDiv.innerHTML = `
        <div class="d-grid gap-2" style="grid-column: span 3;">
          <p><strong>Description:</strong> ${todo.description}</p>
          <p><strong>Notes:</strong> ${todo.notes}</p>
          <p><strong>Priority:</strong> ${todo.priority}</p>
          <div class="d-flex justify-content-end gap-2 mt-3">
            <button class="btn btn-sm btn-warning edit-btn">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
          </div>
        </div>`;

      // Delete button event listener
      collapseDiv.querySelector('.delete-btn').addEventListener('click', () => {
       const alert = document.createElement('div');
       alert.className = 'alert alert-danger alert-dismissible mt-3 fade show';
       alert.textContent = 'Are you sure you want to delete this?';
       alert.setAttribute('role', 'alert');
       alert.setAttribute('aria-live', 'assertive');
       alert.setAttribute('aria-atomic', 'true');
       collapseDiv.innerHTML = '';
       alert.innerHTML = `
        <div class="container">
        <p class="py-3"> Are you sure you want to delete?</p>
        <button class="btn btn-danger yes me-2">Yes</button> 
        <button class="btn btn-success no me-2">No</button> </div>
       `
       collapseDiv.appendChild(alert);
       confirmDelete();
      });

      // confirm delete
      function confirmDelete () {
        const yesButton = document.querySelector('.yes');
        const noButton = document.querySelector('.no');
        yesButton.addEventListener('click', () => {
           project.todos.splice(id, 1); // Remove todo from project
          displayProjects(); // Refresh display
        })
        noButton.addEventListener('click', () => {
          displayProjects(); // Refresh display
        })
      }

      // Edit button event listener
      collapseDiv.querySelector('.edit-btn').addEventListener('click', () => {
        // Simple prompt-based edit for demo purposes
        collapseDiv.classList.toggle('d-grid');
        const newTitle = prompt('Edit Title:', todo.title);
        if (newTitle !== null && newTitle.trim() !== '') {
          todo.title = newTitle.trim();
        }
        const newDescription = prompt('Edit Description:', todo.description);
        if (newDescription !== null && newDescription.trim() !== '') {
          todo.description = newDescription.trim();
        }
        const newDueDate = prompt('Edit Due Date:', todo.dueDate);
        if (newDueDate !== null && newDueDate.trim() !== '') {
          todo.dueDate = newDueDate.trim();
        }
        const newPriority = prompt('Edit Priority (low, medium, high):', todo.priority);
        if (newPriority !== null && ['low', 'medium', 'high'].includes(newPriority.trim().toLowerCase())) {
          todo.priority = newPriority.trim().toLowerCase();
        }
        const newNotes = prompt('Edit Notes:', todo.notes);
        if (newNotes !== null && newNotes.trim() !== '') {
          todo.notes = newNotes.trim();
        }
        displayProjects(); // Refresh display after editing
      });

     
      todoList.appendChild(todoItem);
      todoItem.appendChild(button);
      todoItem.appendChild(collapseDiv);

     

    });
    display.appendChild(todoList);
  });
}

// create todo View
const viewTodoForm = () => {
const displayParent = document.querySelector('.projectJsParent');
if (!displayParent) {
  console.error('projectJsParent element not found');
  return;
}

// Clear existing content
displayParent.innerHTML = '';

const display = document.createElement('div');
display.style.overflowY = 'auto';
const header = document.createElement('h5');
header.setAttribute('class', 'pt-4 px-3')
header.innerHTML = `<i class="bi bi-card-checklist"></i> Create Todo`;
displayParent.appendChild(header);

const container = document.createElement('div');
container.setAttribute('class', 'container pt-4 pb-100');
const form = document.createElement('form');
form.setAttribute('class', 'addTodoForm');
// title
const titleWrapper = document.createElement('div');
titleWrapper.setAttribute('class', 'mb-3');
const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'title');
titleLabel.setAttribute('class', 'form-label');
titleLabel.textContent = 'Title';
const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('class', 'form-control');
titleInput.setAttribute('aria-describedby', 'titleHelp');
titleInput.setAttribute('required', '');
titleInput.id = 'title';
const titleHelp = document.createElement('div');
titleHelp.setAttribute('class', 'form-text');
titleHelp.id = 'titleHelp';
titleHelp.textContent = 'What do you want to call this todo?'
// description
const descriptionWrapper = document.createElement('div');
descriptionWrapper.setAttribute('class', 'mb-3');
const descriptionLabel = document.createElement('label');
descriptionLabel.setAttribute('for', 'description');
descriptionLabel.setAttribute('class', 'form-label');
descriptionLabel.textContent = 'Description';
const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('class', 'form-control');
descriptionInput.setAttribute('aria-describedby', 'descriptionHelp');
descriptionInput.setAttribute('required', '');
descriptionInput.id = 'description';
const descriptionHelp = document.createElement('div');
descriptionHelp.setAttribute('class', 'form-text');
descriptionHelp.id = 'descriptionHelp';
descriptionHelp.textContent = 'Describe this todo.';
// date
const dateWrapper = document.createElement('div');
dateWrapper.setAttribute('class', 'mb-3');
const dateLabel = document.createElement('label');
dateLabel.setAttribute('for', 'date');
dateLabel.setAttribute('class', 'form-label');
dateLabel.textContent = 'Date';
const dateInput = document.createElement('input');
dateInput.setAttribute('type', 'date');
dateInput.setAttribute('class', 'form-control');
dateInput.setAttribute('aria-describedby', 'dateHelp');
dateInput.setAttribute('required', '');
dateInput.id = 'date';
const dateHelp = document.createElement('div');
dateHelp.setAttribute('class', 'form-text');
dateHelp.id = 'dateHelp';
dateHelp.textContent = 'What is the deadline of this todo?';
//priority
const priorityWrapper = document.createElement('div');
priorityWrapper.setAttribute('class', 'mb-3');
const priorityLabel = document.createElement('label');
priorityLabel.setAttribute('for', 'priority');
priorityLabel.setAttribute('class', 'form-label');
priorityLabel.textContent = 'Priority';
const prioritySelect = document.createElement('select');
prioritySelect.name = 'priority';
prioritySelect.id = 'priority';
prioritySelect.setAttribute('class', 'form-select');
prioritySelect.setAttribute('aria-describedby', 'priHelp');
prioritySelect.setAttribute('required', '');
const option1 = document.createElement('option');
option1.setAttribute('selected', '');
option1.setAttribute('disabled', '');
option1.textContent = 'Select priority';
const option2 = document.createElement('option');
option2.value = 'high';
option2.textContent = 'High';
const option3 = document.createElement('option');
option3.value = 'medium';
option3.textContent = 'Medium';
const option4 = document.createElement('option');
option4.value = 'low';
option4.textContent = 'Low';
const priorityHelp = document.createElement('div');
priorityHelp.id = 'priHelp';
priorityHelp.setAttribute('class', 'form-text');
priorityHelp.textContent = 'How important is this todo?';
//project
const projectWrapper = document.createElement('div');
projectWrapper.setAttribute('class', 'mb-3');
const projectLabel = document.createElement('label');
projectLabel.setAttribute('for', 'project');
projectLabel.setAttribute('class', 'form-label');
projectLabel.textContent = 'Project';
const projectSelect = document.createElement('select');
projectSelect.name = 'project';
projectSelect.id = 'project';
projectSelect.setAttribute('class', 'form-select');
projectSelect.setAttribute('aria-describedby', 'proHelp');
projectSelect.setAttribute('required', '');
const projectOption1 = document.createElement('option');
projectOption1.setAttribute('selected', '');
projectOption1.setAttribute('disabled', '');
projectOption1.textContent = 'Existing projects';


const projectHelp = document.createElement('div');
projectHelp.id = 'projectHelp';
projectHelp.setAttribute('class', 'form-text');
projectHelp.textContent = 'What project category does it fit into?';
// notes
const notesWrapper = document.createElement('div');
notesWrapper.setAttribute('class', 'form-floating mb-3');
const notesTextarea = document.createElement('textarea');
notesTextarea.setAttribute('class', 'form-control');
notesTextarea.placeholder = 'Leave your notes here';
notesTextarea.setAttribute('aria-describedby', 'notesHelp');
notesTextarea.setAttribute('required', '');
const notesLabel = document.createElement('label');
notesLabel.setAttribute('for', 'notes');
notesLabel.setAttribute('class', 'fw-bold');
notesLabel.textContent = 'Notes';
const notesHelp = document.createElement('div');
notesHelp.id = 'notesHelp';
notesHelp.setAttribute('class', 'form-text');
notesHelp.textContent = 'He who wants to be noticed must take notes 😃';
// button
const formSubmitButton = document.createElement('button');
formSubmitButton.type = 'submit';
formSubmitButton.setAttribute('class', 'btn btn-primary');
formSubmitButton.textContent = 'Create';


// append all elements
displayParent.appendChild(header);
displayParent.appendChild(display);
display.appendChild(container);
container.appendChild(form);
// append title
form.appendChild(titleWrapper);
titleWrapper.appendChild(titleLabel);
titleWrapper.appendChild(titleInput);
titleWrapper.appendChild(titleHelp);
// append description
form.appendChild(descriptionWrapper);
descriptionWrapper.appendChild(descriptionLabel);
descriptionWrapper.appendChild(descriptionInput);
descriptionWrapper.appendChild(descriptionHelp);
// append date
form.appendChild(dateWrapper);
dateWrapper.appendChild(dateLabel);
dateWrapper.appendChild(dateInput);
dateWrapper.appendChild(dateHelp);
// append priority
form.appendChild(priorityWrapper);
priorityWrapper.appendChild(priorityLabel);
priorityWrapper.appendChild(prioritySelect);
prioritySelect.appendChild(option1);
prioritySelect.appendChild(option2);
prioritySelect.appendChild(option3);
prioritySelect.appendChild(option4);
priorityWrapper.appendChild(priorityHelp);
// append project
form.appendChild(projectWrapper);
projectWrapper.appendChild(projectLabel);
projectWrapper.appendChild(projectSelect);
projectSelect.appendChild(projectOption1);
// get the existing projects from the array
projectArray.forEach(project => {
  const projectOption = document.createElement('option');
  projectOption.value = project.project;
  projectOption.textContent = project.project;
  projectSelect.appendChild(projectOption);
})

projectWrapper.appendChild(projectHelp);

// append notes
form.appendChild(notesWrapper);
notesWrapper.appendChild(notesTextarea); 
notesWrapper.appendChild(notesLabel); 
notesWrapper.appendChild(notesHelp);
// append button 
form.appendChild(formSubmitButton);

// Add form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dateInput.value;
    const priority = prioritySelect.value;
    const notes = notesTextarea.value;
    const selectedProject = projectSelect.value;

    // Create new todo
    const newTodo = new Todo(title, description, dueDate, priority, notes);
    
    // Find selected project and save todo
    const targetProject = findProjectByName(selectedProject);
    if (targetProject) {
        newTodo.saveTodo(targetProject);
        displayProjects(); // Refresh display
    }
});

}

//display view for add todo
addTodoButton.addEventListener('click', ()=>{
  viewTodoForm();
})

// view all tasks with button
function viewAllTasks () {
 
  displayProjects();
  const button = document.querySelector('.tasks');
  button.addEventListener('click', () => {
    displayProjects();
  })
}

// set theme
function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
  } else {
    body.classList.remove('dark-mode');
    toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  if (body.classList.contains('dark-mode')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleTheme();
});

// On page load, set theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

// add active to sidebar
linkSelector.forEach((li) =>{
  li.addEventListener('click', ()=> {
    linkSelector.forEach(l => l.classList.remove('active'));
    li.classList.add('active');
  })
})

// show all task, this is the landing page
viewAllTasks();
