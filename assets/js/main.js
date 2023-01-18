const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function pokemonToHtml(pokemon) {
    return `
        <li class="pokemon-line">
            <span class="pok-number">#001</span>
            <span class="pok-name">${pokemon.name}</span> 
            <div class="detail">
                <ol class="caracteristics">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>    
        </li>
    `
}
const pokemonList = document.getElementById('pokeList')

pokeapi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(pokemonToHtml).join('');
})
    