// const _GetPokemonController = require('../controllers/PokemonsController')

export function _RenderListPokemons (pokemons) {
  const $listPokemons = document.querySelector('.list-pokemons ul')

  let renderLi = (url, name) => (`
      <li class="fx-calc text-center cursor-pointer" id="${url.substr(-3).replace(/\//g, '')}">
        <p>${name}</p>
      </li>
    `
  )

  pokemons.filter((pokemon, index) => {
    $listPokemons.insertAdjacentHTML('beforeend', renderLi(pokemon.url, pokemon.name))
  })
}
