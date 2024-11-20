function renderCard(indexPokemon) {

    let cardRef = document.getElementById("cards");
    cardRef.innerHTML += `<div class= "singleCard" onclick = "openInfo(${indexPokemon})">
                            <img class="pokeCardImg" src="${responseToJson.sprites.front_default}" alt=".img">
                            <div class="cardInfos">
                            <p class= "number"> Nr ${indexPokemon} </p>
                                <h2>${responseToJson.name}</h2>

                                <div class="types" id="types${indexPokemon}">
                                   
                                </div>
                                </div>
                            </div>`
    for (let indexType = 0; indexType < responseToJson.types.length; indexType++) {
        let typesRef = document.getElementById("types" + indexPokemon)
        typesRef.innerHTML += `<p class="type${responseToJson.types[indexType].type.name}">${responseToJson.types[indexType].type.name}</p>`
    }
}