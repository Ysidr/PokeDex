function setPokeCount(){
    rendertPokemon = 0;
    clearMain();
    isPokeCount = true
    latestPokemon = 1;
    pokemonCount = Number(document.getElementById("numberInput").value);
    isCorrectParameters();
    isPokeCount == false;
}

function showAmountOfPokemon() {
    document.getElementById('loadingText').innerHTML = `${rendertPokemon} von ${pokemonCount} geladen`;
} 
function isCorrectParameters() {
    if (pokemonCount == "") {
        pokemonCount = 20;
    }
    if (pokemonCount <= 1000 && pokemonCount >= 1) {
        if (search.length >= 3) {
            loadAndShowSelectedPokemon()
        } else if (search.length == 0) {
            loadAndShowAllPokemon()
        }
    }else {
        dispError()
    }
}