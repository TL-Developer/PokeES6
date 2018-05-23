import { _ListPokemonsService } from './services/PokemonsService'
import PokemonController from './controllers/PokemonsController'

// LISTAGEM DOS POKEMONS
(() => {
  _ListPokemonsService().then((pokemons) => (
    PokemonController().listPokemons(pokemons)
  ))
})()
