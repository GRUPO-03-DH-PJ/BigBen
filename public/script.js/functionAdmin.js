const btnAtualizar = document.querySelector('#atualizar');
const btnCriar = document.querySelector('#criar');
const btnDeletar = document.querySelector('#deleta');
const btnList = document.querySelector('#list');
const btnOutros = document.querySelector('#outros');

const divCreate = document.querySelector('.create');
const divUpdate = document.querySelector('.update');
const divdelet = document.querySelector('.delet');
const divOutros = document.querySelector('.outros');
const divList = document.querySelector('.list');

function removerVisivel() {
  divCreate.classList.remove('.visivel');
  divUpdate.classList.remove('.visivel');
  divdelet.classList.remove('.visivel');
  divOutros.classList.remove('.visivel');
  divList.classList.remove('.visivel');
}
btnAtualizar.addEventListener('click', () => {
  removerVisivel();
  divUpdate.classList.add('.visivel');
})
btnCriar.addEventListener('click', () => {
  removerVisivel();
  divCreate.classList.add('.visivel');
})
btnDeletar.addEventListener('click', () => {
  removerVisivel();
  divdelet.classList.add('.visivel');
})
btnList.addEventListener('click', () => {
  removerVisivel();
  divList.classList.add('.visivel');
})
btnOutros.addEventListener('click', () => {
  removerVisivel();
  divOutros.classList.add('.visivel');
})
