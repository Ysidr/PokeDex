 async function showMore() {
    latestPokemon = Number(pokemonCount)
    pokemonCount = Number(pokemonCount) + 20;
     await addData();
    
    if (search.length >= 3) {
        searchPokemon()
    }
}