const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;
const makeList = options => {
  return options.map(options => {
    const list = document.createElement("li")
    list.textContent = options
    return list
    
  }
    )
}
const elements = makeList(ingredients)
ulEl.append(...elements)