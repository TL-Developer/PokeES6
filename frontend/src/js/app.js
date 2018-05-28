import { Routers } from './Routes/index'
import PokemonsController from './controllers/PokemonsController'
import * as CcAlertInfo from '../components/AlertInfo'

(() => {
  // APP OFFLINE OR ONLINE
  if (!navigator.onLine) {
    return CcAlertInfo.render()
  }
  CcAlertInfo.destroy()

  // LIST POKEMONS
  PokemonsController().listPokemons()
  PokemonsController().createPaginationAndSearch()
  Routers()
})()
