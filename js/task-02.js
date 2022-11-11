const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector('#ingredients')
ingredients.forEach(ingredient => {
  const newLi = document.createElement('li')
  newLi.classList.add('item')
  newLi.innerHTML = ingredient
  ingredientsUl.appendChild(newLi)
  
})


