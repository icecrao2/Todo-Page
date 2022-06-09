const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event){
  const li = event.target.parentElement;
  const newTodos = toDos.filter((item) => {
    if(item.id === parseInt(li.id)) {return false;}
    else return true;
  });
  toDos = newTodos;
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  li.remove();
}

function paintTodo(newTodoObj){
  const newTodo = newTodoObj.text;
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  span.innerText = newTodo;
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value ="";
  const newTodoObj={
    text:newTodo,
    id:Date.now()
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
};


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
  const parseTodos = JSON.parse(savedTodos);
  parseTodos.forEach(paintTodo);
  toDos = parseTodos;
  console.log(toDos);
};

