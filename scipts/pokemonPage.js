const url = "https://pokeapi.co/api/v2/";

axios
    .get(`${url}pokemon/1`)
    .then(result => createPoke(body, result.data))



axios
    .get(`${url}pokemon/1`)
    .then(result => { console.log(result.data) })

let body = document.getElementById("bulbasaur__body");

function createPoke(div, data) {

    let name = document.createElement("h1");
    var text = document.createTextNode(data.name)
    name.appendChild(text);
    let pokeImg = document.createElement("img");
    pokeImg.src = data.sprites.front_default
    let statDiv = document.createElement("div");
    for (i = 0; i < data.stats.length; i++) {
        let statH = document.createElement("h5");
        var statText = document.createTextNode(`${data.stats[i].stat.name} : ${data.stats[i].base_stat}`);
        statH.appendChild(statText);
        statDiv.appendChild(statH);
    }



    div.appendChild(name);
    div.appendChild(pokeImg);
    div.appendChild(statDiv);
}