const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function typeToLi(pokemonType){
    return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function pokemonToHtml(pokemon) {
    return `
        <li class="pokemon-line">
            <span class="pok-number">${pokemon.order}</span>
            <span class="pok-name">${pokemon.name}</span> 
            <div class="detail">
                <ol class="caracteristics">
                ${typeToLi(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>    
        </li>
    `
}
const pokemonList = document.getElementById('pokeList')

pokeapi.getPokemons().then((pokemons = []) => {
    const editedList = pokemons.map(pokemonToHtml).join('');
    pokemonList.innerHTML = editedList;
})
    