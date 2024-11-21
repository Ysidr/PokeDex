function searchPokemon() {
    search = document.getElementById("searchBar").value
    console.log(search.length);
    if (search.length >= 3) {
        loadSpecificData()
    } else {
        loadAllData()
        dispError()
    }
    
}