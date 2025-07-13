const btn = document.getElementById("btn");
const input = document.getElementById("text");
const square = document.getElementById("square");
const e_btn = document.getElementById("e_btn");
const range = document.getElementById("range");
const circle = document.getElementById("circle");
let color = "";
let size = "";

const changeSquareColor = function () {
  square.style.backgroundColor = color;
  e_btn.style.display = "none";
};

input.addEventListener("change", function (event) {
  color = event.target.value;
});

btn.addEventListener("click", changeSquareColor);

range.addEventListener("input", function (event) {
  size = event.target.value;
  square.style.width = size + "%";
  square.style.height = size + "%";
});
