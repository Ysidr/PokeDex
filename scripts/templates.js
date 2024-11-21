

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

function renderInfo(indexPokemon) {
let infoRef = document.getElementById("resp-info");
infoRef.innerHTML = 
    `<img class="infoImg" src="${responseToJson.sprites.front_default}" alt="">
        <p class="number">
            Nr ${indexPokemon}
        </p>
        <div class="types" id="types${indexPokemon}">

        </div>
        <h3>Sounds</h3>
        <div class="sounds">
        <button onclick="playSound1()" id="playSound1"> Play Sound</button>
        <button onclick="playSound2()" id="playSound2"> Play Sound</button>
        </div>

        <div class="sizePokemon">
            <div class="height">
                <h3>Height</h3>
                <p class="size singleInfoBox">${responseToJson.height}cm?</p>
            </div>
            <div class="weight">
                <h3>Weight</h3>
                <p class="scale singleInfoBox">${responseToJson.weight}kg</p>
            </div>
        </div>
        <div class="Abilities">
            <h3>Abilities</h3>
            <div class="allAbilities">
                <p class="abilities singleInfoBox">${responseToJson.abilities[0].ability.name}</p>
                <p class="abilities singleInfoBox">${responseToJson.abilities[1].ability.name}</p>
            </div>
        </div>
        <h3>Stats</h3>
        <div class="allStats">
            <div class="stats">
                <p class= "stat1">HP</p>
                <p>${responseToJson.stats[0].base_stat}</p>
            </div>
            <div class="stats">
                <p class= "stat2">ATK</p>
                <p>${responseToJson.stats[1].base_stat}</p>
            </div>
            <div class="stats">
                <p class= "stat3">DEF</p>
                <p>${responseToJson.stats[2].base_stat}</p>
            </div>
            <div class="stats">
                <p class= "stat4">SpA</p>
                <p>${responseToJson.stats[3].base_stat}</p>
            </div>
            <div class="stats">
                <p class= "stat5">SpD</p>
                <p>${responseToJson.stats[4].base_stat}</p>
            </div>
            <div class="stats">
                <p class= "stat6">SPD</p>
                <p>${responseToJson.stats[5].base_stat}</p>
            </div>

        </div>
        <h3 class="shinyImgh3">Shiny</h3>
        <div class="evolutions">
            <img src="${responseToJson.sprites.front_shiny}" alt="">
            <img src="${responseToJson.sprites.back_shiny}" alt="">
        </div>`

    
}