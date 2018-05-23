const $listPokemons = document.querySelector('.list-pokemons ul')

const _RenderListPokemons = (pokemons) => {
  let renderLi = (url, name) => (`
      <li class="fx-calc text-center cursor-pointer" id="${url.substr(-3).replace(/\//g, '')}">
        <p>${name}</p>
      </li>
    `
  )
debugger
  pokemons.filter((pokemon, index) => {
    $listPokemons.insertAdjacentHTML('beforeend', renderLi(pokemon.url, pokemon.name))
  })
}
