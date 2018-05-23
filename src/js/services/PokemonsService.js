const _ListPokemonsService = async (limit, offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit ? limit : '21'}&offset=${offset ? offset : '0'}`)
  const data = await response.json()
  return data.results
}
