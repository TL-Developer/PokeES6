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
    let allPokemons = []
    PokemonsService.listAllPokemons((pokemons) => {
      allPokemons = pokemons
    })

    // functions
    const autocomplete = (val) => {
      let pokemonReturn = []

      allPokemons.forEach((pokemon) => {
        if (val === pokemon.name.slice(0, val.length)) {
          pokemonReturn.push(pokemon.name)
        }
      })

      return pokemonReturn
    }

    let $autocompleteResults = $('.autocomplete-results')
    let pokemonToShow = []

    $search.addEventListener('blur', (e) => {
      pokemonToShow = []
      $autocompleteResults.innerHTML = ''
      $search.value = ''
    })

    $search.addEventListener('keyup', (e) => {
      let inputVal = e.target.value

      if (inputVal.length > 0) {
        $autocompleteResults.innerHTML = ''
        pokemonToShow = autocomplete(inputVal)

        pokemonToShow.forEach((pokemon) => {
          $autocompleteResults.innerHTML += `<li class="autocompleted cursor-pointer">${pokemon}</li>`
        })

        $('.autocompleted', 'all').forEach(($elm) => {
          $elm.addEventListener('click', (e) => {
            $search.value = e.target.innerText
            $search.focus()
            pokemonToShow = []
            $autocompleteResults.innerHTML = ''
            window.scroll(0, 1000)
            controller.searchPokemon($search.value)
            $search.value = ''
          })
        })

        $autocompleteResults.style.display = 'block'
      } else {
        pokemonToShow = []
        $autocompleteResults.innerHTML = ''
      }

      if (e.code === 'Enter') {
        pokemonToShow = []
        $autocompleteResults.innerHTML = ''
        window.scroll(0, 1000)
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
