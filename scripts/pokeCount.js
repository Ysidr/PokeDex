function setPokeCount(){
    pokemonCount = document.getElementById("numberInput").value;
    if (pokemonCount <= 1000 || pokemonCount >= 1) {
        if (search.length >= 3) {
            loadSpecificData()
        } else if (search.length == 0) {
            loadAllData()
        }
    }else {
        dispError()
    }
}