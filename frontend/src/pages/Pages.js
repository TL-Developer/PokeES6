import PokemonsController from '../js/controllers/PokemonsController'

export function Home () {
  setTimeout(() => {
    PokemonsController().listPokemons()
    PokemonsController().createPaginationAndSearch()
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

      <div class="row">
        <div class="search m-bottom5">
          <input class="input-text font-pokemon-solid letter-spacing-2 text-color-gray-2" type="text" placeholder="Search pokemon for name...">
        </div>
        <section class="pokemon-not-found m-bottom5 row">
          <h6 class="text-center heart animated infinite no-padding no-margin text-color-pallet-3">Pokemon não encontrado</h6>
        </section>
      </div>

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
    </article>
  `
}

export function About () {
  return `
    <article class="m-top20 m-left20">
      <h2 class="text-color-pallet-2">## Aplicação</h2>
      <ul>
        <li>Criar uma página para listar todos os pokemons</li>
        <li>Criar uma página para listar os detalhes de um pokemon selecionado</li>
      </ul>
      <h2 class="text-color-pallet-2">## O que será avaliado</h2>
        <ul>
          <li>consumo de api</li>
          <li>responsive design</li>
          <li>route management</li>
          <li>componentes/classes em ES6</li>
          <li>application build</li>
          <li>Históricos de commits (standard commits)</li>
        </ul>
      <h2 class="text-color-pallet-2">## HTML</h2>
      <p>Semântica e separação de components</p>
      <h2 class="text-color-pallet-2">## Style</h2>
      <p>Organização e reaproveitamento, padrão utilizado. (BEM, ATOMIC, SMACSS)</p>
      <h2 class="text-color-pallet-2">## JS</h2>
      <p>Reaproveitamento de código, conhecimento da linguagem ECMASCRIPT mínimo 2015</p>
    </article>
  `
}
