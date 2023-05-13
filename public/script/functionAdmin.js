let btnAtualizar = document.querySelector('#atualizar');
let btnCriar = document.querySelector('#criar');

const divCreate = document.querySelector('.create');
const divUpdate = document.querySelector('.update');

function removerVisivel() {
  divCreate.classList.remove('visivel');
  divUpdate.classList.remove('visivel');
};

btnAtualizar.addEventListener('click', () => {
  removerVisivel();
  divUpdate.classList.add('visivel');
});

btnCriar.addEventListener('click', () => {
  removerVisivel();
  divCreate.classList.add('visivel');
});
