import { Routers } from './Routes/index'
import PokemonsController from './controllers/PokemonsController'

(() => {
  // LIST POKEMONS
  PokemonsController().listPokemons()
  PokemonsController().createPaginationAndSearch()
  Routers()
})()
