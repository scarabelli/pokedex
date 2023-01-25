// const offset = 0
// const limit = 10
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// function typeToLi(pokemonType){
//     return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

const pokemonList = document.getElementById('pokeList')
const moreButton = document.getElementById('moreButton')
const limit = 12
const maxPokemons = 649
let offset = 0;

function loadPokemon(offset,limit){
    pokeapi.getPokemons(offset,limit).then((pokemons = []) => {
        const editedList = pokemons.map((pokemon) =>  `
            <li class="pokemon-line ${pokemon.mainType}">
                <span class="pok-number">#${pokemon.pokeNumber}</span>
                <span class="pok-name">${pokemon.name}</span> 
                <div class="detail">
                    <ol class="caracteristics">
                         ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                         </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>    
                </li>
                `).join('')
    pokemonList.innerHTML += editedList
})
}
loadPokemon(offset,limit)

moreButton.addEventListener('click', () =>{
    offset += limit
    const nextPageRecords = offset + limit

    if(nextPageRecords >= maxPokemons){
        const maxLimit =  maxPokemons - offset
        loadPokemon(offset,maxLimit)

        moreButton.parentElement.removeChild(moreButton)
    } else{
        loadPokemon(offset,limit)
    }
})


    // function pokemonToHtml(pokemon) {
    //     return `
    //         <li class="pokemon-line ${pokemon.mainType}">
    //             <span class="pok-number">#${pokemon.pokeNumber}</span>
    //             <span class="pok-name">${pokemon.name}</span> 
    //             <div class="detail">
    //                 <ol class="caracteristics">
    //                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    //                 </ol>
    //                 <img src="${pokemon.photo}" alt="${pokemon.name}">
    //             </div>    
    //         </li>
    //     `
    // }