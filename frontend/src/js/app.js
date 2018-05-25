import PokemonsController from './controllers/PokemonsController'
import { $ } from './helpers/$'

(() => {
  // LIST POKEMONS
  const $loadingListPokemons = $('.list-pokemons .loading')
  $loadingListPokemons.style.display = 'block'
  PokemonsController().listPokemons()
})()
