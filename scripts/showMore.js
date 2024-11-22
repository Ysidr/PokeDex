 async function showMore() {
    latestPokemon = Number(pokemonCount)
    pokemonCount = Number(pokemonCount) + 20;
    document.getElementById("cards").classList.add("d-none");
    document.getElementById("loadMore").classList.add("d-none");
    loading()
     await addAndCheck()
    loading()
    document.getElementById("cards").classList.remove("d-none");
    document.getElementById("loadMore").classList.remove("d-none");
}

async function addAndCheck() {
    await addData();
    
    if (search.length >= 3) {
        searchPokemon()
    }
}