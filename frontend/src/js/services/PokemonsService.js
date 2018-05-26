const uriPokemon = 'https://pokeapi.co/api/v2/pokemon'
const uriPokemonType = 'https://pokeapi.co/api/v2/type'

export async function listPokemons (limit, offset) {
  const response = await fetch(`${uriPokemon}/?limit=${limit ? limit : '21'}&offset=${offset ? offset : '0'}`)
  const data = await response.json()
  return data.results
}

export async function getPokemon (pokemonId) {
  const response = await fetch(`${uriPokemon}/${pokemonId}`)
  const data = await response.json()
  return data
}

export async function getPokemonType (pokemonId) {
  const response = await fetch(`${uriPokemon}/${pokemonId}`)
  const data = await response.json()
  return data
}
