let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(e) {
  inputEl = e.currentTarget.value;
  console.log(inputEl);

  inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
}
