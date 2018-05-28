import * as PokemonsService from '../services/PokemonsService'
import { RenderListPokemons, RenderPokemon } from '../views/PokemonsView'
import { $ } from '../helpers/$'
const localforage = require('localforage')

module.exports = () => {
  const controller = {}
  const $loadingListPokemons = $('.list-pokemons .loading')
  const $loadingPokemonDetail = $('.pokemon-detail .loading')
  const $pokemonNotFound = $('.pokemon-not-found')

  controller.createPaginationAndSearch = () => {
    // ELEMENTS
    const $search = $('.search input')
    const $beforePage = $('.before-page')
    const $beforePageBlock = $('.before-page-block')
    const $nextPage = $('.next-page')
    const $nextPageBlock = $('.next-page-block')

    // VARS TO PAGINATE
    let page = 0
    let qtsPokemons = 21

    // NEXT LIST POKEMONS
    $beforePage.addEventListener('click', (e) => {
      page--
      controller.listPokemons(qtsPokemons, qtsPokemons * page)
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
      controller.listPokemons(qtsPokemons, qtsPokemons * page)
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
        controller.searchPokemon($search.value)
        $search.value = ''
      }
    })
  }

  controller.listPokemons = (limit, offset) => {
    $loadingListPokemons.style.display = 'block'
    PokemonsService.listPokemons(limit, offset).then((pokemons) => (
      RenderListPokemons(pokemons)
    )).catch(() => {
      // IF NOT CONNECTION INTERNET, RETURN DATA LOCAL
      localforage.getItem('pokemons', (err, pokemons) => {
        if (err) {
          throw new Error(err)
        }
        RenderListPokemons(pokemons)
      })
    })
  }

  controller.getPokemon = (pokemonId) => {
    $pokemonNotFound.style.display = 'none'
    $loadingPokemonDetail.style.display = 'block'
    PokemonsService.getPokemon(pokemonId).then((pokemon) => {
      if (navigator.onLine) {
        RenderPokemon(pokemon)
      }
    }).catch((err) => {
      return err
      // IF NOT CONNECTION INTERNET, RETURN DATA LOCAL
      localforage.getItem(`pokemon${pokemonId}`, (err, pokemon) => {
        if (err) {
          throw new Error(err)
        }
        RenderPokemon(pokemon)
      })
    })
  }

  controller.searchPokemon = (query) => {
    const regexGetIdPokemon = /(?<=\/)(\d+)/g
    query = query.toLowerCase()

    $loadingPokemonDetail.style.display = 'block'
    $pokemonNotFound.style.display = 'none'

    PokemonsService.listAllPokemons((pokemons) => {
      [...pokemons].every((pokemon, index) => {
        if (pokemon.name === query) {
          PokemonsService.getPokemon(pokemon.url.match(regexGetIdPokemon)).then((pokemon) => (
            RenderPokemon(pokemon)
          ))
          $pokemonNotFound.style.display = 'none'
          return false
        } else {
          $loadingPokemonDetail.style.display = 'none'
          $pokemonNotFound.style.display = 'block'
          setTimeout(() => {
            $pokemonNotFound.style.display = 'none'
          }, 3000)
          return true
        }
      })
    })
  }

  return controller
}
