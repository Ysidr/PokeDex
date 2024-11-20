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

function renderCard(indexPokemon) {
    
    let cardRef = document.getElementById("cards");
    cardRef.innerHTML += `<div class= "singleCard">
                            <img class="pokeCardImg" src="${responseToJson.sprites.front_default}" alt=".img">
                            <div class="cardInfos">
                            <p class= "number"> Nr ${indexPokemon} </p>
                                <h2>${responseToJson.name}</h2>

                                <div class="types" id="types${indexPokemon}">
                                   
                                </div>
                                </div>
                            </div>`
for (let indexType = 0; indexType < responseToJson.types.length; indexType++) {
    let typesRef = document.getElementById("types"+ indexPokemon)
    typesRef.innerHTML += `<p class="type${responseToJson.types[indexType].type.name}">${responseToJson.types[indexType].type.name}</p>`
}    
}
