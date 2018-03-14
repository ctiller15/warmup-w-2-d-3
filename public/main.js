const background = document.querySelector("body");
const colorText = document.querySelector("h1");
const colorButton = document.querySelector(".colorChange");

const colorChange = () => {
  let red = calculateColor();
  let blue = calculateColor();
  let green = calculateColor();
  // console.log(red, blue, green);
  let colorName = `rgb(${red},${green},${blue})`;
  let invertedColor = `rgb(${255 - red},${255 - green},${255 - blue})`;

  colorText.textContent = colorName;
  colorText.style.color = invertedColor;
  background.style.backgroundColor = colorName;
  colorButton.style.backgroundColor = invertedColor;
  colorButton.style.color = colorName;

}

const calculateColor = () => {
  return Math.floor(Math.random() * 256);
}

const main = () => {
  let colorChangingAuto = setInterval(() => {
    colorChange();
  }, 10000);

}

document.addEventListener('DOMContentLoaded', main)
