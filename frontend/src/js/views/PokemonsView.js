import { $ } from '../helpers/$'

export function RenderListPokemons (pokemons) {
  const PokemonsController = require('../controllers/PokemonsController')
  const $loadingListPokemons = $('.list-pokemons .loading')
  const $loadingPokemon = $('.pokemon-detail .loading')
  const $listPokemons = $('.list-pokemons ul')

  $loadingListPokemons.style.display = 'none'

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
      $loadingPokemon.style.display = 'block'
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
  const $pokemon = $('.pokemon-detail .render-pokemon')
  const $changePokemon = $('.choose-pokemon')
  const $loading = $('.pokemon-detail .loading')

  $loading.style.display = 'none'
  $changePokemon.style.display = 'none'

  let renderTemplate = () => (
    `
      <div class="row pokemon-name">
        <h1 class="roll text-color-pallet-4 animated text-center m-bottom20 font-pokemon-hollow">${pokemon.name}</h1>
      </div>

      <div class="row pull-left">
        <picture class="flipH animated text-center pull-left">
          <img class="width-100" src="${pokemon.sprites.front_default}" alt="pokemon-front">
        </picture>

        <picture class="flipH animated text-center pull-right">
          <img class="width-100" src="${pokemon.sprites.back_default}" alt="pokemon-back">
        </picture>
      </div>

      <div class="row text-center m-top10 pull-left">
        <h2><small>Weight:</small> <i class="font-pokemon-hollow text-color-pallet-2">${pokemon.weight}</i></h2>
        <h2><small>Experience:</small> <i class="font-pokemon-hollow text-color-pallet-2">${pokemon.base_experience}</i></h2>
        <h2><small>Height:</small> <i class="font-pokemon-hollow text-color-pallet-2">${pokemon.height}</i></h2>
      </div>
    `
  )

  $pokemon.innerHTML = renderTemplate()
}
