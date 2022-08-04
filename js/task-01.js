const list = document.querySelectorAll('li.item');

console.log(`В списку ${list.length} категорій.`);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {

  console.log(
    `Категорія: ${el.firstElementChild.textContent}, Кількість элементів: ${el.lastElementChild.children.length}`,
  );
});