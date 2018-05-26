const uriAllPokemon = 'https://pokeapi.co/api/v2/pokemon/?limit=1000'
const uriPokemon = 'https://pokeapi.co/api/v2/pokemon'
const uriPokemonType = 'https://pokeapi.co/api/v2/ability'
const localforage = require('localforage')

export async function listAllPokemons () {
  const response = await fetch(`${uriAllPokemon}`)
  const data = await response.json()
  localforage.setItem('allPokemons', data.results)
  return data.results
}

export async function listPokemons (limit, offset) {
  const response = await fetch(`${uriPokemon}/?limit=${limit ? limit : '21'}&offset=${offset ? offset : '0'}`)
  const data = await response.json()
  localforage.setItem('pokemons', data.results)
  return data.results
}

export async function getPokemon (pokemonId) {
  const response = await fetch(`${uriPokemon}/${pokemonId}`)
  const data = await response.json()
  localforage.setItem(`pokemon${pokemonId}`, data)
  return data
}

export async function getPokemonAbility (pokemonId) {
  const response = await fetch(`${uriPokemonType}/${pokemonId}`)
  const data = await response.json()
  return data
}
