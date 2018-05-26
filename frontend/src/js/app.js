import PokemonsController from './controllers/PokemonsController'
import { $ } from './helpers/$'

(() => {
  // ELEMENTS
  const $beforePage = $('.before-page')
  const $beforePageBlock = $('.before-page-block')
  const $nextPage = $('.next-page')
  const $nextPageBlock = $('.next-page-block')
  const $search = $('.search input')

  // VARS TO PAGINATE
  let page = 0
  let qtsPokemons = 21

  // LIST POKEMONS
  PokemonsController().listPokemons()

  // NEXT LIST POKEMONS
  $beforePage.addEventListener('click', (e) => {
    page--
    PokemonsController().listPokemons(qtsPokemons, qtsPokemons * page)
    if (page === 0) {
      $beforePage.setAttribute('style', 'opacity: .3;')
      $beforePageBlock.setAttribute('style', 'display: block;')
    }

    if (page < 40) {
      $nextPage.setAttribute('style', 'opacity: 1;')
      $nextPageBlock.setAttribute('style', 'display: none;')
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

    if (page === 40) {
      $nextPage.setAttribute('style', 'opacity: .3;')
      $nextPageBlock.setAttribute('style', 'display: block;')
    }
  })

  // SEARCH POKEMON FOR NAME
  $search.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
      PokemonsController().searchPokemon($search.value)
    }
  })
})()
