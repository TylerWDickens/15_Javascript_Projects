const colors = [];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  
  for(let i = 0; i<3; i++){
    colors[i] = getRandomNumber();
  }

  document.body.style.backgroundColor = "rgb("+ colors[0] + "," + colors[1] + "," + colors[2] + ")";
  color.textContent = "RGB("+ colors[0] + "," + colors[1] + "," + colors[2] + ")";
});

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}


