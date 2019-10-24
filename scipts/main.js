const url = "https://pokeapi.co/api/v2/";

axios
  .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964")
  .then(result => {
    pokeDex(body, result.data.results);
  });
// axios.get("https://pokeapi.co/api/v2/pokemon/1/").then(result => {
//   console.log(result.data.types.length);
//   console.log(result.data.types[1].type.name + result.data.types[0].type.name);
// });

let body = document.getElementById("pokedex");
function pokeDex(div, data) {
  for (i = 0; i < 3; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-div");
    let cardName = document.createElement("h2");
    var text = document.createTextNode(data[i].name);
    cardName.appendChild(text);
    let cardImg = document.createElement("img");
    axios.get(data[i].url).then(result => {
      cardImg.src = result.data.sprites.front_default;
    });
    let cardType = document.createElement("h3");
    // cardType.appendChild(text);
    let pokeType = "";
    axios.get(data[i].url).then(function(result) {
      //result.data.types[0].type.name
      for (i = 0; i < result.data.types.length; i++) {
        pokeType = pokeType + ` ${result.data.types[i].type.name}`;
      }
      var text = document.createTextNode(pokeType);
      cardType.appendChild(text);
    });
    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardType);
    div.appendChild(cardDiv);
  }
}
