import * as PokemonsService from '../services/PokemonsService'
import { RenderListPokemons, RenderPokemon } from '../views/PokemonsView'
import { $ } from '../helpers/$'

module.exports = () => {
  const controller = {}
  const $loadingListPokemons = $('.list-pokemons .loading')
  const $loadingPokemonDetail = $('.pokemon-detail .loading')

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
        console.log(pokemons)
        RenderListPokemons(pokemons)
      })
    })
  }

  controller.getPokemon = (pokemonId) => {
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
        console.log(pokemon)
        RenderPokemon(pokemon)
      })
    })
  }

  controller.searchPokemon = (query) => {
    const regexGetIdPokemon = /(?<=\/)(\d+)/g

    $loadingPokemonDetail.style.display = 'block'
    PokemonsService.listAllPokemons().then((pokemons) => (
      [...pokemons].filter((pokemon) => {
        if (pokemon.name === query) {
          PokemonsService.getPokemon(pokemon.url.match(regexGetIdPokemon)).then((pokemon) => (
            RenderPokemon(pokemon)
          ))
        }
      })
    )).catch(() => {
      localforage.getItem('allPokemons', (err, pokemons) => {
        if (err) {
          throw new Error(err)
        }

        console.log(pokemons)
      })
    })
  }

  return controller
}
