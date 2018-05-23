const init = async () => {
  const pokemons = await _ListPokemonsService(24, 0)
  _ListPokemonsController(pokemons)
}
init()
