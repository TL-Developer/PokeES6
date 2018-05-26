import * as PokemonsService from '../services/PokemonsService'
import { RenderListPokemons, RenderPokemon } from '../views/PokemonsView'
import { $ } from '../helpers/$'

module.exports = () => {
  const controller = {}
  const $loadingListPokemons = $('.list-pokemons .loading')
  const $loadingPokemonDetail = $('.pokemon-detail .loading')

  controller.listPokemons = (limit, offset) => {
    $loadingListPokemons.style.display = 'block'
    PokemonsService.list(limit, offset).then((pokemons) => (
      RenderListPokemons(pokemons)
    ))
  }

  controller.getPokemon = (pokemonId) => {
    $loadingPokemonDetail.style.display = 'block'
    PokemonsService.get(pokemonId).then((pokemon) => (
      RenderPokemon(pokemon)
    ))
  }

  return controller
}
