// const offset = 0
// const limit = 10
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// function typeToLi(pokemonType){
//     return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

function pokemonToHtml(pokemon) {
    return `
        <li class="pokemon-line ${pokemon.mainType}">
            <span class="pok-number">#${pokemon.pokeNumber}</span>
            <span class="pok-name">${pokemon.name}</span> 
            <div class="detail">
                <ol class="caracteristics">
                     ${pokemon.types.map((type) => `<li class="type ${pokemon.mainType}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>    
        </li>
    `
}
const pokemonList = document.getElementById('pokeList')

pokeapi.getPokemons().then((pokemons = []) => {
    const editedList = pokemons.map(pokemonToHtml).join('')
    pokemonList.innerHTML = editedList
})
    