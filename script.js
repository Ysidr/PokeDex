let search = "";
let currentPokeName = "";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let pokemonCount = 20;
let latestPokemon = 1;
let isPokeCount = false;
let rendertPokemon = 0;


function clearMain() {
    document.getElementById("cards").innerHTML = "";
}

function init() {
    clearMain()
    loadAndShowAllPokemon();
}

async function loadAndShowAllPokemon() {
    document.getElementById("cards").classList.add("d-none");
    loading();
    await loadAllData()
    loading();
    document.getElementById("cards").classList.remove("d-none");


}
async function loadAndShowSelectedPokemon() {

    await loadSpecificData()


}

function stopBubbling(event) {
    event.stopPropagation();
}

async function loadSpecificData() {
    removeError()
    document.getElementById("cards").classList.add("d-none");
    loading();
    await getPokemonByName();
    latestPokemon = Number(pokemonCount);
    loading();
    document.getElementById("cards").classList.remove("d-none");
}

async function loadAllData() {
    removeError()
    for (let indexPokemon = latestPokemon; indexPokemon < Number(pokemonCount) + 1; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();

        renderCard(indexPokemon);
        if (isPokeCount = true) {
            rendertPokemon ++;
            showAmountOfPokemon()
        }
    }
    latestPokemon = Number(pokemonCount)
}

async function addData() {
    removeError()
    loading();
    for (let indexPokemon = latestPokemon +1; indexPokemon < Number(pokemonCount) + 1; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();

        renderCard(indexPokemon);
    }
    latestPokemon = Number(pokemonCount)
    loading();
}

function dispError() {
    document.getElementById("warning").classList.remove("d-none");
}
function removeError() {
    document.getElementById("warning").classList.add("d-none");
}

async function getPokemonByName() {
    for (let indexPokemon = latestPokemon; indexPokemon < Number(pokemonCount) + 1; indexPokemon++) {
        let response = await fetch(BASE_URL + indexPokemon);
        responseToJson = await response.json();
        currentPokeName = responseToJson.name
        if (currentPokeName.includes(search)) {
            renderCard(indexPokemon);
        }
        if (isPokeCount = true) {
            rendertPokemon ++;
            showAmountOfPokemon()
        }
    }
}