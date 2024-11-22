function setPokeCount(){
    pokemonCount = document.getElementById("numberInput").value;
    if (pokemonCount == "") {
        pokemonCount = 20;
    }
    if (pokemonCount <= 1000 || pokemonCount >= 1) {
        if (search.length >= 3) {
            loadAndShowSelectedPokemon()
        } else if (search.length == 0) {
            loadAndShowAllPokemon()
        }
    }else {
        dispError()
    }
}