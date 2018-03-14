const background = document.querySelector("body");
const colorText = document.querySelector("h1");
const colorButton = document.querySelector(".colorChange");

const colorChange = () => {
  let red = calculateColor();
  let blue = calculateColor();
  let green = calculateColor();

  let colorName = `rgb(${red},${green},${blue})`;
  let invertedColor = `rgb(${255 - red},${255 - green},${255 - blue})`;

  changeColorItems(colorName, invertedColor);
}

const changeColorItems = (color, inverted) => {
  colorText.textContent = color;
  colorText.style.color = inverted;
  background.style.backgroundColor = color;
  colorButton.style.backgroundColor = inverted;
  colorButton.style.color = color;
}

const calculateColor = () => {
  return Math.floor(Math.random() * 256);
}

const main = () => {
  let colorChangingAuto = setInterval(colorChange, 500);
}

document.addEventListener('DOMContentLoaded', main)
