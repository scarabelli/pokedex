  const pokeapi ={}
  
  function pokeApiDetailToPokemon(pokeDetail){
   const pokemon = new Pokemon()
   pokemon.pokeNumber = pokeDetail.id
   pokemon.name = pokeDetail.name

   const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
   const [mainType] = types
   
   pokemon.types =  types
   pokemon.mainType = mainType

   pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
   
   return pokemon
}


  pokeapi.getPokemonDetail = (pokemon) => {
     return fetch(pokemon.url)
            .then((requestResponse) => requestResponse.json())
            .then(pokeApiDetailToPokemon)
         }

  pokeapi.getPokemons = (offset = 0, limit = 10 ) => {
     const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
     return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails) => pokemonDetails)

  }
  