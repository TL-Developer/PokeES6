import PokemonsController from '../js/controllers/PokemonsController'

export function Home () {
  setTimeout(() => {
    PokemonsController().listPokemons()
  }, 10)
  return `
    <article class="list-pokemons m-top10 pull-left">
      <h1 class="text-center m-bottom20 font-pokemon-solid text-color-pallet-2 letter-spacing-3">Choose your pokemon</h1>
      <div class="loading">
        <img class="pokeball-loading animated infinite" src="static/pokeball.png" alt="loading...">
      </div>
      <ul class="fx fx-just-center fx-wrap fx-just-baseline fx-box-sizing-border-box"></ul>

      <div class="row arrows">
        <div class="before-page-block"></div>
        <img class="pull-left m-left20 arrow-left-an cursor-pointer before-page" src="static/arrow-left.png" alt="next">

        <div class="next-page-block"></div>
        <img class="pull-right m-right20 arrow-right-an cursor-pointer next-page" src="static/arrow-right.png" alt="next">
      </div>
    </article>

    <!-- CONTENT POKEMON DETAIL -->
    <article class="box-pokemon-detail pull-right m-right20 m-top10">
      <h1 class="text-center m-bottom20 font-pokemon-solid text-color-pallet-2 letter-spacing-3">Details of your pokemon</h1>

      <section class="pokemon-detail pull-left">
        <div class="change-view-card cursor-pointer">
          <p class="text-color-blue">Change view pokemon</p>
        </div>

        <div class="loading">
          <img class="pokeball-loading animated infinite" src="static/pokeball.png" alt="loading...">
        </div>

        <div class="choose-pokemon">
          <h1 class="text-center font-pokemon-solid text-color-gray-2">Chosse your pokemon</h1>
          <img class="character" src="static/ash.png" alt="Ash">
        </div>

        <div class="render-pokemon"></div>
      </section>

      <section class="pokemon-not-found row m-top20 pull-left">
        <h2 class="text-center heart animated infinite text-color-pallet-3">Pokemon não encontrado</h2>
      </section>
    </article>
  `
}

export function About () {
  return `
    <article class="list-pokemons m-top10 pull-left">
      <h1>About the challenge</h1>
    </article>
  `
}
