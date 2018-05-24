import { $ } from '../helpers/$'

export function _RenderListPokemons (pokemons) {
  const PokemonsController = require('../controllers/PokemonsController')
  const $listPokemons = document.querySelector('.list-pokemons ul')

  let renderLi = (url, name) => (`
      <li class="pokemon fx-calc text-center cursor-pointer" id="${url.substr(-3).replace(/\//g, '')}">
        <p>${name}</p>
      </li>
    `
  )

  pokemons.filter((pokemon, index) => {
    $listPokemons.insertAdjacentHTML('beforeend', renderLi(pokemon.url, pokemon.name))
  })

  // CLICK AT POKEMON FOR DETAILS
  const $pokemons = $('.pokemon', 'all')
  $pokemons.forEach((pokemon) => {
    pokemon.addEventListener('click', (e) => {
      if (e.target.id) {
        PokemonsController().getPokemon(e.target.id)
      }
      else {
        PokemonsController().getPokemon(e.target.parentNode.id)
      }
    })
  })
}
