import { Routers } from './Routes/index'
import PokemonsController from './controllers/PokemonsController'
import * as CcHeader from '../components/Header'
import * as CcFooter from '../components/Footer'
import * as CcAlertInfo from '../components/AlertInfo'
import * as CcPokemonList from '../components/PokemonList'
import * as CcPokemonDetails from '../components/PokemonDetails'

(() => {
  // registers
  CcHeader.render()
  CcFooter.render()
  CcPokemonList.render()
  CcPokemonDetails.render()

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
