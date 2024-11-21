let search = "";
let currentPokeName = "";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let pokemonCount = 100;



function init() {
    loadAllData();
}

function stopBubbling(event) {
    event.stopPropagation();
}

async function loadSpecificData() {
    document.getElementById("cards").innerHTML = "";
    for (let indexPokemon = 1; indexPokemon < Number(pokemonCount)+1; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();
        currentPokeName = responseToJson.name
        if (currentPokeName.includes(search)) {
            renderCard(indexPokemon);
        }
    }
}

async function loadAllData() {
    document.getElementById("cards").innerHTML = "";
    for (let indexPokemon = 1; indexPokemon < Number(pokemonCount)+1; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();

        renderCard(indexPokemon);
    }
}

function dispError() {
    document.getElementById("warning").classList.remove("d-none");
}
function removeError() {
    document.getElementById("warning").classList.add("d-none");

}