import { _RenderListPokemons } from '../views/PokemonsView'

module.exports = () => {
  const controller = {}

  controller.listPokemons = (pokemons) => {
    _RenderListPokemons(pokemons)
  }

  controller.getPokemon = (pokemonId) => {
    console.log(pokemonId)
  }

  return controller
}
