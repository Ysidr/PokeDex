function searchPokemon() {
    search = document.getElementById("searchBar").value
    if (search.length >= 3) {
        removeError()
        loadSpecificData()
    } else if (search.length == 0) {
        removeError()
        loadAllData()
    }else {
        loadAllData()
        dispError()
    }
    
}