import PokemonController from './controllers/PokemonsController'
import { $ } from './helpers/$'

(() => {
  // LIST POKEMONS
  PokemonController().listPokemons()

  const $listPokemons = $('.im-pokemon', 'all')
  console.log($listPokemons)
})()
