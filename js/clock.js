const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  
  const dateOfString = `${hours} : ${minutes} : ${seconds}`;
//  console.log(dateOfString);
  clock.innerText = dateOfString;  
}

getClock();
setInterval(getClock, 1000);
