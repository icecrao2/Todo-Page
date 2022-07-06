const API_KEY="657b39958d5fb75412f87bc2e8e3848b";


function onGeoOk(location){
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    const weatherContainer= document.querySelector("#weather span:nth-child(1)");
    const nameContainer= document.querySelector("#weather span:nth-child(2)");
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    nameContainer.innerText= data.name;
    nameContainer.classList.add("block");
    
  });
};

function onGeoErr(){
  alert("can't find you. no weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
