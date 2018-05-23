import * as PokemonsService from '../services/PokemonsService'
import { _RenderListPokemons } from '../views/PokemonsView'

module.exports = () => {
  const controller = {}

  controller.listPokemons = () => {
    PokemonsService.list().then((pokemons) => (
      _RenderListPokemons(pokemons)
    ))
  }

  controller.getPokemon = (pokemonId) => {
    PokemonsService.get(pokemonId).then((pokemon) => (
      // _RenderListPokemons(pokemon)
      console.log(pokemon)
    ))
  }

  return controller
}
