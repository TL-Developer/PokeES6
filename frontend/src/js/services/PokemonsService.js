const uri = 'https://pokeapi.co/api/v2/pokemon'

export async function list (limit, offset) {
  const response = await fetch(`${uri}/?limit=${limit ? limit : '21'}&offset=${offset ? offset : '0'}`)
  const data = await response.json()
  return data.results
}

export async function get (pokemonId) {
  const response = await fetch(`${uri}/${pokemonId}`)
  const data = await response.json()
  return data.results
}
