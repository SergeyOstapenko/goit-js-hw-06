function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const bcgBody = document.querySelector("body");

const btnClick = addEventListener("click", onBtnClickChangeColor);

function onBtnClickChangeColor(event) {
  const color = getRandomHexColor();
  bcgBody.style.backgroundColor = color;

  return (colorName.textContent = color);
}
