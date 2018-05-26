import * as PokemonsService from '../services/PokemonsService'
import { RenderListPokemons, RenderPokemon } from '../views/PokemonsView'
import { $ } from '../helpers/$'
const localforage = require('localforage')

module.exports = () => {
  const controller = {}
  const $loadingListPokemons = $('.list-pokemons .loading')
  const $loadingPokemonDetail = $('.pokemon-detail .loading')
  const $pokemonNotFound = $('.pokemon-not-found')

  controller.listPokemons = (limit, offset) => {
    $loadingListPokemons.style.display = 'block'
    PokemonsService.listPokemons(limit, offset).then((pokemons) => (
      RenderListPokemons(pokemons)
    )).catch(() => {
      // IF NOT CONNECTION INTERNET, RETURN DATA LOCAL
      console.log('Sem conexão com a API, então segue os pokemons gravado local(indexDB)')
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
    PokemonsService.getPokemon(pokemonId).then((pokemon) => (
      RenderPokemon(pokemon)
    )).catch(() => {
      // IF NOT CONNECTION INTERNET, RETURN DATA LOCAL
      console.log('Sem conexão com a API, então segue o pokemon gravado local(indexDB)')
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

    $loadingPokemonDetail.style.display = 'block'
    $pokemonNotFound.style.display = 'none'
    PokemonsService.listAllPokemons().then((pokemons) => (
      [...pokemons].every((pokemon, index) => {
        if (pokemon.name === query) {
          PokemonsService.getPokemon(pokemon.url.match(regexGetIdPokemon)).then((pokemon) => (
            RenderPokemon(pokemon)
          ))
          $pokemonNotFound.style.display = 'none'
          return false
        }else {
          $loadingPokemonDetail.style.display = 'none'
          $pokemonNotFound.style.display = 'block'
          return true
        }
      })
    )).catch(() => {
      localforage.getItem('allPokemons', (err, pokemons) => {
        if (err) {
          throw new Error(err)
        }

        // console.log(pokemons)
      })
    })
  }

  return controller
}
