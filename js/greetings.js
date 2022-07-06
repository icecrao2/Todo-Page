const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const toDo_Form = document.querySelector("#todo-form");


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="userName";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  toDo_Form.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(userName)
}

function paintGreetings(userName){
  greeting.innerText = `Hello ${userName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDo_Form.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  toDo_Form.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}
