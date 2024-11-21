let search = "";
let currentPokeName = "";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";



function init() {
    loadData();
}

async function loadData() {
    document.getElementById("cards").innerHTML = "";
    if (search.length >= 3) {
        loadSpecificData()
    }else{
        loadAllData()
    }
    
}

function stopBubbling(event) {
    event.stopPropagation();
}

async function loadSpecificData() {
    for (let indexPokemon = 1; indexPokemon < 101; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();
        currentPokeName = responseToJson.name
        if (currentPokeName.includes(search)) {
            renderCard(indexPokemon);
        }
    }
}

async function loadAllData() {
    for (let indexPokemon = 1; indexPokemon < 101; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();

        renderCard(indexPokemon);
    }
}