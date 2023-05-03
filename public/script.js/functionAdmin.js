const btnAzul = document.querySelector('#btn-azul');
const btnVermelho = document.querySelector('#btn-vemelho');
const btnVerde = document.querySelector('#btn-verde');
const divVermelho = document.querySelector('.vermelho');
const divAzul = document.querySelector('.azul');
const divVerde = document.querySelector('.verde');

function removerVisivel() {
  divAzul.classList.remove('visivel');
  divVermelho.classList.remove('visivel');
  divVerde.classList.remove('visivel');
}
btnAzul.addEventListener('click', () => {
  removerVisivel();
  divAzul.classList.add('visivel');
})
divVermelho.addEventListener('click', () => {
  removerVisivel();
  divVermelho.classList.add('visivel');
})
btnVerde.addEventListener('click', () => {
  removerVisivel();
  divVerde.classList.add('visivel');
})
