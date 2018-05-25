import PokemonsController from './controllers/PokemonsController'
import { $ } from './helpers/$'

(() => {
  // ELEMENTS
  const $beforePage = $('.before-page')
  const $beforePageBlock = $('.before-page-block')
  const $nextPage = $('.next-page')

  // VARS TO PAGINATE
  let page = 0
  let qtsPokemons = 21

  // LIST POKEMONS
  PokemonsController().listPokemons()

  // NEXT LIST POKEMONS
  $beforePage.addEventListener('click', (e) => {
    page--
    PokemonsController().listPokemons(qtsPokemons, qtsPokemons * page)
    if (page == 0) {
      $beforePage.setAttribute('style', 'opacity: .3;')
      $beforePageBlock.setAttribute('style', 'display: block;')
    }
  })

  // NEXT LIST POKEMONS
  $nextPage.addEventListener('click', (e) => {
    page++
    PokemonsController().listPokemons(qtsPokemons, qtsPokemons * page)
    if (page > 0) {
      $beforePage.setAttribute('style', 'opacity: 1;')
      $beforePageBlock.setAttribute('style', 'display: none;')
    }
  })
})()
