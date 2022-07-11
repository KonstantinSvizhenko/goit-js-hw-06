const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
  });

const placeToAppend = document.querySelector('#ingredients');

placeToAppend.append(...ingredientsListEl)