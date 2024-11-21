function setPokeCount(){
    pokemonCount = document.getElementById("numberInput").value;
    if (search.length >= 3) {
        loadSpecificData()
    } else {
        loadAllData()
        dispError()
    }
}