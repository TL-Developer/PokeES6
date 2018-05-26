import { $ } from '../helpers/$'

export function RenderListPokemons (pokemons) {
  const PokemonsController = require('../controllers/PokemonsController')
  const $loadingListPokemons = $('.list-pokemons .loading')
  const $listPokemons = $('.list-pokemons ul')
  const $arrows = $('.arrows')

  $loadingListPokemons.style.display = 'none'

  const regexGetIdPokemon = /(?<=\/)(\d+)/g
  let renderTemplate = (url, name) => (`
      <li class="hover-grow pokemon fx-calc text-center cursor-pointer" id="${url.match(regexGetIdPokemon)}">
        <p>${name}</p>
      </li>
    `
  )

  $listPokemons.innerHTML = ''
  pokemons.filter((pokemon, index) => {
    $listPokemons.insertAdjacentHTML('beforeend', renderTemplate(pokemon.url, pokemon.name))
  })

  // CLICK AT POKEMON FOR DETAILS
  const $pokemons = $('.pokemon', 'all')
  $pokemons.forEach((pokemon) => {
    pokemon.addEventListener('click', (e) => {
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
  const $pokemon = $('.pokemon-detail .render-pokemon')
  const $changePokemon = $('.choose-pokemon')
  const $loading = $('.pokemon-detail .loading')
  const $changeViewCard = $('.change-view-card')

  $loading.style.display = 'none'
  $changePokemon.style.display = 'none'

  const uriPokemonArt = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/'
  let renderTemplate = () => (
    `
      <div class="row pokemon-name">
        <h1 class="roll text-color-pallet-4 animated text-center m-bottom20 font-pokemon-hollow">${pokemon.name}</h1>
      </div>

      <div class="row text-center pull-left pokemon-art">
        <picture>
          <img class="flipH animated width-40" src="${uriPokemonArt + pokemon.id + '.png'}" alt="pokemon-front">
        </picture>
      </div>

      <div class="row pull-left pokemon-card">
        <picture class="flipH animated text-center pull-left">
          <img class="width-100" src="${pokemon.sprites.front_default || './static/no-pokemon.jpg'}" alt="pokemon-front">
        </picture>

        <picture class="flipH animated text-center pull-right">
          <img class="width-100" src="${pokemon.sprites.back_default || './static/no-pokemon.jpg'}" alt="pokemon-back">
        </picture>
      </div>

      <div class="row text-center m-top10 pull-left">
        <h2><small>Type:</small> <i class="font-pokemon-hollow text-color-pallet-2">${pokemon.types[0].type.name}</i></h2>
        <h2><small>Weight:</small> <i class="font-pokemon-hollow text-color-pallet-2">${pokemon.weight}</i></h2>
        <h2><small>Experience:</small> <i class="font-pokemon-hollow text-color-pallet-2">${pokemon.base_experience}</i></h2>
        <h2><small>Height:</small> <i class="font-pokemon-hollow text-color-pallet-2">${pokemon.height}</i></h2>
      </div>
    `
  )

  $pokemon.innerHTML = renderTemplate()

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
