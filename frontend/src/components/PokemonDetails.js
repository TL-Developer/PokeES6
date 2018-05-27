const uriPokemonArt = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/'

export function render (pokemon) {
  return `
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
