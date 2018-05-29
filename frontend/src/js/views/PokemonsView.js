import * as CcpokemonList from '../../components/PokemonList'
import * as CcpokemonDetails from '../../components/PokemonDetails'
import { $ } from '../helpers/$'

export function RenderListPokemons (pokemons) {
  const PokemonsController = require('../controllers/PokemonsController')
  const $loadingListPokemons = $('.list-pokemons .loading')
  const $listPokemons = $('.list-pokemons ul')
  const $arrows = $('.arrows')

  $loadingListPokemons.style.display = 'none'

  $listPokemons.innerHTML = ''
  pokemons.filter((pokemon, index) => {
    CcpokemonList.renderPokemons(pokemon.url, pokemon.name)
  })

  // CLICK AT POKEMON FOR DETAILS
  const $pokemons = $('.pokemon', 'all')
  $pokemons.forEach((pokemon) => {
    pokemon.addEventListener('click', (e) => {
      window.scroll(0, 1000)
      if (e.target.id) {
        PokemonsController().getPokemon(e.target.id)
      } else {
        PokemonsController().getPokemon(e.target.parentNode.id)
      }
    })
  })

  $arrows.style.display = 'block'
}

export function RenderPokemon (pokemon) {
  const $changePokemon = $('.choose-pokemon')
  const $loading = $('.pokemon-detail .loading')
  const $changeViewCard = $('.change-view-card')

  $loading.style.display = 'none'
  $changePokemon.style.display = 'none'

  CcpokemonDetails.renderPokemon(pokemon)

  // HANLDE ERROR IMAGE ART POKEMON
  $('.pokemon-art picture img').onerror = function () {
    this.src = './static/no-pokemon.jpg'
    throw new Error('Não existe esta imagem no servidor, so sorry :( ')
  }

  // CHANGE CARD VIEW
  const $pokemonArt = $('.pokemon-art')
  const $pokemonCard = $('.pokemon-card')

  $changeViewCard.style.display = 'block'
  $changeViewCard.addEventListener('click', () => {
    if ($pokemonCard.style.display !== 'none') {
      $pokemonArt.style.display = 'block'
      $pokemonCard.style.display = 'none'
    } else {
      $pokemonArt.style.display = 'none'
      $pokemonCard.style.display = 'block'
    }
  })
}
