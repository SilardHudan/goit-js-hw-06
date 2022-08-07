let valEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  valEl += 1;
  counterValue.innerText = valEl;
});

dekrBtn.addEventListener('click', event => {
  valEl -= 1;
  counterValue.innerText = valEl;
});