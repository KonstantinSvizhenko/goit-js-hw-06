const decrementBtn = document.querySelector('button[data-action="decrement"]');
const increnentBtn = document.querySelector('button[data-action="increment"]');
const valueElem = document.querySelector('#value');
let counterValue = 0;

const decrementFun = () => {
    return valueElem.textContent = counterValue -= 1;
}

decrementBtn.addEventListener('click', decrementFun);

const increnentFun = () => {
    return valueElem.textContent = counterValue += 1;
}

increnentBtn.addEventListener('click', increnentFun);
