import { $ } from '../helpers/$'

export function RenderListPokemons (pokemons) {
  const PokemonsController = require('../controllers/PokemonsController')
  const $listPokemons = document.querySelector('.list-pokemons ul')

  let renderTemplate = (url, name) => (`
      <li class="hover-grow pokemon fx-calc text-center cursor-pointer" id="${url.substr(-3).replace(/\//g, '')}">
        <p>${name}</p>
      </li>
    `
  )

  pokemons.filter((pokemon, index) => {
    $listPokemons.insertAdjacentHTML('beforeend', renderTemplate(pokemon.url, pokemon.name))
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

export function RenderPokemon (pokemon) {
  const $pokemon = document.querySelector('.pokemon-detail')

  let renderTemplate = () => (
    `
      <div class="row pokemon-name">
        <h1 class="text-center m-bottom20 font-pokemon-hollow">${pokemon.name}</h1>
      </div>

      <div class="row pull-left">
        <picture class="text-center pull-left">
          <img class="width-100" src="${pokemon.sprites.front_default}" alt="pokemon-front">
        </picture>

        <picture class="text-center pull-right">
          <img class="width-100" src="${pokemon.sprites.back_default}" alt="pokemon-back">
        </picture>
      </div>

      <div class="row text-center m-top10 pull-left">
        <p><small>Weight:</small> <i class="font-pokemon-hollow">${pokemon.weight}</i></p>
        <p><small>Experience:</small> <i class="font-pokemon-hollow">${pokemon.base_experience}</i></p>
        <p><small>Height:</small> <i class="font-pokemon-hollow">${pokemon.height}</i></p>
      </div>
    `
  )

  $pokemon.innerHTML = renderTemplate()
}
