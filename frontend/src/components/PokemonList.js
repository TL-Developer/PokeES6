const regexGetIdPokemon = /(?<=\/)(\d+)/g
const $view = document.querySelector('.VIEW')

export const template = `
  <article class="list-pokemons m-top10 pull-left">
    <h1 class="text-center m-bottom20 font-pokemon-solid text-color-pallet-2 letter-spacing-3">Choose your pokemon</h1>
    <div class="loading">
      <img class="pokeball-loading animated infinite" src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" alt="loading...">
    </div>
    <ul class="fx fx-just-center fx-wrap fx-just-baseline fx-box-sizing-border-box"></ul>

    <div class="row arrows">
      <div class="before-page-block"></div>
      <img class="pull-left m-left20 arrow-left-an cursor-pointer before-page" src="static/arrow-left.png" alt="next">

      <div class="next-page-block"></div>
      <img class="pull-right m-right20 arrow-right-an cursor-pointer next-page" src="static/arrow-right.png" alt="next">
    </div>
  </article>
`

export function render (url, name) {
  $view.insertAdjacentHTML('afterbegin', template)
}

export function renderPokemons (url, name) {
  const $listPokemons = document.querySelector('.list-pokemons ul')
  $listPokemons.insertAdjacentHTML('beforeend', `
    <li class="hover-grow pokemon fx-calc text-center cursor-pointer" id="${url.match(regexGetIdPokemon)}">
      <p>${name}</p>
    </li>
  `)
}
