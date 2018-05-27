const regexGetIdPokemon = /(?<=\/)(\d+)/g

export function render (url, name) {
  return `
    <li class="hover-grow pokemon fx-calc text-center cursor-pointer" id="${url.match(regexGetIdPokemon)}">
      <p>${name}</p>
    </li>
  `
}
