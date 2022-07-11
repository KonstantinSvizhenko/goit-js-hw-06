const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

const result = itemsEl.forEach(elem => {
  let category = elem.firstElementChild.textContent;
  let elemCount = elem.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elemCount}`);
});