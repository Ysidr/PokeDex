function openInfo(indexPokemon) {
    document.getElementById('resp-info').classList.remove('resp-info-closed');
    document.getElementById("content").classList.add("widthContentSmall");
    stopBubbling(event)
    getInfo(indexPokemon)
}
function closeInfo() {
    document.getElementById('resp-info').classList.add('resp-info-closed');
    document.getElementById("content").classList.remove("widthContentSmall");
}
async function getInfo(indexPokemon) {
    let response = await fetch(BASE_URL + indexPokemon);
    responseToJson = await response.json();
    renderInfo(indexPokemon)  
}
