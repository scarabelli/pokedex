  const pokeapi ={}

  pokeapi.getPokemonDetail = (pokemon) => {
     return fetch(pokemon.url).then((requestResponse) => requestResponse.json(''))
  }

  pokeapi.getPokemons = (offset = 0, limit = 10 ) => {
     const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
     return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
        .then((detailRequest) => Promise.all((detailRequest)))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error))
  }
  