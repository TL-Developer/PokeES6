import * as PokemonsService from '../services/PokemonsService'
import { RenderListPokemons, RenderPokemon } from '../views/PokemonsView'

module.exports = () => {
  const controller = {}

  controller.listPokemons = () => {
    PokemonsService.list().then((pokemons) => (
      RenderListPokemons(pokemons)
    ))
  }

  controller.getPokemon = (pokemonId) => {
    PokemonsService.get(pokemonId).then((pokemon) => (
      RenderPokemon(pokemon)
    ))
  }

  return controller
}
