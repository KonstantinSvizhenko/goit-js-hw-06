function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
    ;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.body;
const textEl = document.querySelector('.color')

btnEl.addEventListener('click', getChangeColor)

function getChangeColor() {
  const color = getRandomHexColor();
    
  

  bodyEl.style.backgroundColor = color;
  textEl.textContent = bodyEl.style.backgroundColor = color;

}

