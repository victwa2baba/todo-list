import "./style.css";
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { format, compareAsc } from "date-fns";
import { id } from "date-fns/locale";

format(new Date(2014, 1, 11), "MM/dd/yyyy");

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

// Dark mode toggle logic
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const content = document.querySelector('#content');
const linkSelector = content.querySelectorAll('a');
const display = document.querySelector('.projectJs');
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
  const yes = new Todo('Esther', 'my wife', '12,06,2025', 'high', 'its her birthday');
  const no = new Todo('Ett', 'tt', '12,06,2025', 'high', 'its her birthday');
  yes.saveTodo(vic);
  no.saveTodo(vic);

  const name = createProject('name');
  const nam = new Todo('Eii', 'mfe', '12,06,2025', 'low', 'itsrthday');
  nam.saveTodo(name);
  console.log(projectArray);

  console.log(vic);


function displayProjects() {
  display.innerHTML = ''; // Clear previous content

  projectArray.forEach((project, index) => {
    // Create list group for todos
    const todoList = document.createElement('div');
    todoList.className = 'd-grid';

    project.todos.forEach((todo, id) => {
      const todoItem = document.createElement('div');
      todoItem.className = 'project d-grid gap-3 container mt-3';
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
      button.setAttribute('data-bs-toggle', 'collapse');
      button.setAttribute('data-bs-target', `#collapse${id}`);
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', `collapse${id}`);
      button.textContent = "Details";
    
       // Create collapse container for todos
      const collapseDiv = document.createElement('div');
      collapseDiv.id = `collapse${id}`;
      collapseDiv.className = 'collapse';
      collapseDiv.setAttribute('aria-labelledby', `details-${todo}-${id}`);

      todoItem.innerHTML = `
        <h5>${todo.title}</h5>
        <div>
          <i class="bi bi-calendar-event-fill"></i> ${todo.dueDate}</p>
        </div>`;

      button.addEventListener('click', () => {
        console.table(`clicked, ${id}`)
      })
        
      todoList.appendChild(todoItem);
      todoItem.appendChild(button);
      todoItem.appendChild(collapseDiv);
    });

  
    // collapseDiv.appendChild(cardBody);
    // projectCard.appendChild(todoList);

    display.appendChild(todoList);
  });
}

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

displayProjects();
