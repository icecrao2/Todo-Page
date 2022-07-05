const images = [
  "city.jpg",
  "wetland.jpg",
  "water.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.body.style.backgroundImage = 
  `url('img/${chosenImage}')`;

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
//bgImage.alt = "bakcground Image";

//document.body.appendChild(bgImage);
