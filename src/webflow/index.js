// Elements
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input-field");
const todoTemplate = document.querySelector("#todo-item");
const todoForm = document.querySelector("#todo-form");

const todos = [
  {
    text: "Debug coffee machine",
    completed: false, // Status: Still trying to reproduce the error after the first cup...
  },
  {
    text: "Rename 'Untitled' to 'Untitled (1) (1)'",
    completed: false, // Because who needs version control for files?
  },
  {
    text: "Submit my PR to Github so Bae can grade it",
    completed: false, // I hope I didn't forget anything...
  },
  {
    text: "Figure why the cat keeps rebooting my laptop",
    completed: true, // Spoiler: Spline made the keyboard a nice warm place to sit down!
  },
];

// Clears the todo list and renders the todos
function renderTodos() {
  // Your code here
  todoList.innerHTML = "";
  
  todos.forEach((todo) => {
    const todoClone = todoTemplate.cloneNode(true);
    const todoText = todoClone.querySelector('.todo-text');
    todoText.textContent = todo.text;
    
    if (todo.completed) {
      todoText.classList.add('completed');
    }

    todoClone.addEventListener('click', toggleCompleted);
    todoList.appendChild(todoClone);
  })
}

// Takes the value from the input field and adds a new todo to the todos array
// Then calls renderTodos to update the UI
// Then clears the input field
function addTodo(e) {
  // Prevent Webflow Form Submit Behavior
  e.preventDefault();
  e.stopPropagation();

  // Your code here
  todos.push({
    text: todoInput.value,
    completed: false
  });
  renderTodos();
  todoInput.value = "";
}

function toggleCompleted(e) {
  // Your code here
  const todoTextElement = e.target;
  todoTextElement.classList.toggle('completed');
}

// Execution
todoForm.addEventListener("submit", addTodo);
renderTodos();
