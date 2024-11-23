function openInfo(indexPokemon) {
    document.getElementById('resp-info').classList.remove('resp-info-closed');
    document.getElementById("content").classList.add("widthContentSmall");
    document.getElementById("body").classList.add("mediaBodySmall");
    stopBubbling(event)
    getInfo(indexPokemon)
}

function closeInfo() {
    document.getElementById('resp-info').classList.add('resp-info-closed');
    document.getElementById("content").classList.remove("widthContentSmall");
    document.getElementById("body").classList.remove("mediaBodySmall");
}

async function getInfo(indexPokemon) {
    let response = await fetch(BASE_URL + indexPokemon);
    responseToJson = await response.json();
    renderInfo(indexPokemon)  
}

function previous(indexPokemon) {
    indexPokemon --;
    if (indexPokemon >=1 && indexPokemon <= pokemonCount) {
        openInfo (indexPokemon)
    }else{
        indexPokemon ++;
    }
}
function next(indexPokemon) {
    indexPokemon ++;
    if (indexPokemon >=1 && indexPokemon <= pokemonCount) {
        openInfo (indexPokemon)
    }else{
        indexPokemon --;
    }
}