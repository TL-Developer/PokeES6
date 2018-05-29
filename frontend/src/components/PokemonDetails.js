const uriPokemonArt = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/'
const $view = document.querySelector('.VIEW')

export const template = `
  <article class="box-pokemon-detail pull-right m-right20 m-top10">
    <h1 class="text-center m-bottom20 font-pokemon-solid text-color-pallet-2 letter-spacing-3">Details of your pokemon</h1>

    <div class="row">
      <div class="search relative m-bottom5">
        <input class="input-text font-pokemon-solid letter-spacing-2 text-color-gray-2" autofocus="true" type="text" placeholder="Search pokemon for name...">
        <ul class="autocomplete-results"></ul>
      </div>
      <section class="pokemon-not-found m-bottom5 row">
        <h6 class="text-center heart animated infinite no-padding no-margin text-color-pallet-3">Pokemon não encontrado</h6>
      </section>
    </div>

    <section class="pokemon-detail pull-left">
      <div class="change-view-card cursor-pointer hover-grow">
        <p class="text-color-white font-pokemon-solid">ArtWork</p>
      </div>

      <div class="loading">
        <img class="pokeball-loading animated infinite" src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" alt="loading...">
      </div>

      <div class="choose-pokemon">
        <h1 class="text-center font-pokemon-solid text-color-gray-2">Chosse your pokemon</h1>
        <img class="character" src="static/ash.png" alt="Ash">
      </div>

      <div class="render-pokemon"></div>
    </section>
  </article>
`

export function render (pokemon) {
  $view.insertAdjacentHTML('beforeend', template)
}

export function renderPokemon (pokemon) {
  const $pokemon = document.querySelector('.pokemon-detail .render-pokemon')

  $pokemon.innerHTML = `
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
}
