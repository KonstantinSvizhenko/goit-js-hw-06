function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.body;
const textEl = document.querySelector('.color')

btnEl.addEventListener('click', getChangColor)

function getChangColor(event) {
  const color = getRandomHexColor;
  
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor()
  
}