const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
function init() {
    loadData();
}


async function loadData() {
    for (let indexPokemon = 1; indexPokemon < 101; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();
        console.log(responseToJson);

        renderCard(indexPokemon);
    }
}

function stopBubbling(event) {
    event.stopPropagation();
}


