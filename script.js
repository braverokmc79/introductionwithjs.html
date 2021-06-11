const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 370;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "INITIAL_COLOR";
ctx.fillStyle = "INITIAL COLOR";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
    ctx.fillStyle = ctx.strokeStyle;
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "🖌️";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

function button1_click() {
  document.querySelector("*").style.backgroundColor = "#ffc7c7";
  document.querySelector("footer").style.backgroundColor = "#ffc7c7";
  document.querySelector(".menu").style.backgroundColor = "#ffc7c7";
  document.querySelector("#wrap").style.backgroundColor = "#ffc7c7";
  document.querySelector("nav").style.backgroundColor = "#ffc7c7";
  document.querySelector("body").style.backgroundColor = "#ffc7c7";
  document.querySelector("#button1").style.backgroundColor = "#ffc7c7";
  document.querySelector("#button2").style.backgroundColor = "#fbf6f0";
  document.querySelector("#button3").style.backgroundColor = "#fbf6f0";
  document.querySelector("#button4").style.backgroundColor = "#fbf6f0";
  document.querySelector("h1").style.color = "#ffc7c7";
  document.querySelector("h2").style.color = "#ffc7c7";
  document.getElementById("photoOne").src = "홈사진4.jpg";
  document.getElementById("photoTwo").src = "홈사진3.jpg";
}

function button2_click() {
  document.querySelector("*").style.backgroundColor = "#bce6eb";
  document.querySelector("footer").style.backgroundColor = "#bce6eb";
  document.querySelector(".menu").style.backgroundColor = "#bce6eb";
  document.querySelector("#wrap").style.backgroundColor = "#bce6eb";
  document.querySelector("nav").style.backgroundColor = "#bce6eb";
  document.querySelector("body").style.backgroundColor = "#bce6eb";
  document.querySelector("#button1").style.backgroundColor = "#B8E9FF";
  document.querySelector("#button2").style.backgroundColor = "#bce6eb";
  document.querySelector("#button3").style.backgroundColor = "#B8E9FF";
  document.querySelector("#button4").style.backgroundColor = "#B8E9FF";
  document.querySelector("h1").style.color = "#bce6eb";
  document.querySelector("h2").style.color = "#bce6eb";
  document.getElementById("photoOne").src = "summer1.jpg";
  document.getElementById("photoTwo").src = "summer2.jpg";
}

function button3_click() {
  document.querySelector("*").style.backgroundColor = "#f2dcbb";
  document.querySelector("footer").style.backgroundColor = "#f2dcbb";
  document.querySelector(".menu").style.backgroundColor = "#f2dcbb";
  document.querySelector("#wrap").style.backgroundColor = "#f2dcbb";
  document.querySelector("nav").style.backgroundColor = "#f2dcbb";
  document.querySelector("body").style.backgroundColor = "#f2dcbb";
  document.querySelector("#button1").style.backgroundColor = "#ffa45b";
  document.querySelector("#button2").style.backgroundColor = "#ffa45b";
  document.querySelector("#button3").style.backgroundColor = "#f2dcbb";
  document.querySelector("#button4").style.backgroundColor = "#ffa45b";
  document.querySelector("h1").style.color = "#f2dcbb";
  document.querySelector("h2").style.color = "#f2dcbb";
  document.getElementById("photoOne").src = "autumn1.jpg";
  document.getElementById("photoTwo").src = "autumn2.jpg";
}

function button4_click() {
  document.querySelector("*").style.backgroundColor = "#EFF8FF";
  document.querySelector("footer").style.backgroundColor = "#EFF8FF";
  document.querySelector(".menu").style.backgroundColor = "#EFF8FF";
  document.querySelector("#wrap").style.backgroundColor = "#EFF8FF";
  document.querySelector("nav").style.backgroundColor = "#EFF8FF";
  document.querySelector("body").style.backgroundColor = "#EFF8FF";
  document.querySelector("#button1").style.backgroundColor = "#bce6eb";
  document.querySelector("#button2").style.backgroundColor = "#bce6eb";
  document.querySelector("#button3").style.backgroundColor = "#bce6eb";
  document.querySelector("#button4").style.backgroundColor = "#EFF8FF";
  document.querySelector("h1").style.color = "#EFF8FF";
  document.querySelector("h2").style.color = "#EFF8FF";
  document.getElementById("photoOne").src = "winter1.jpg";
  document.getElementById("photoTwo").src = "winter2.jpg";
}
