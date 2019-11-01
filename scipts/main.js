const url = 'https://pokeapi.co/api/v2/';

axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964').then((result) => {
	pokeDex(body, result.data.results);
	// addNameListener(result.data.results);
});
// axios.get("https://pokeapi.co/api/v2/pokemon/1/").then(result => {
//   console.log(result.data.types.length);
//   console.log(result.data.types[1].type.name + result.data.types[0].type.name);
// });

let body = document.getElementById('pokedex');
function pokeDex(div, data) {
	for (i = 0; i < 151; i++) {
		let cardDiv = document.createElement('div');
		cardDiv.classList.add('card-div');
		cardDiv.id = data[i].name;
		let cardName = document.createElement('h2');
		cardName.classList.add('poke-name');
		var text = document.createTextNode(data[i].name);
		cardName.appendChild(text);
		let cardImg = document.createElement('img');
		cardDiv.appendChild(cardName);
		cardDiv.appendChild(cardImg);
		axios.get(data[i].url).then((result) => {
			cardImg.src = result.data.sprites.front_default;
		});
		let typeDiv = document.createElement('div');
		typeDiv.classList.add('typeDiv');
		let pokeType = '';
		axios.get(data[i].url).then(function(result) {
			if (result.data.types.length === 1) {
				pokeType = `	 ${result.data.types[0].type.name}`;
				text = document.createTextNode(pokeType);
				let cardType = document.createElement('h3');
				cardType.classList.add(`${result.data.types[0].type.name}`);
				cardType.classList.add('poke-type');
				cardType.appendChild(text);
				typeDiv.appendChild(cardType);
			} else if (result.data.types.length === 2) {
				for (i = 0; i < result.data.types.length; i++) {
					pokeType = `	 ${result.data.types[i].type.name}`;
					text = document.createTextNode(pokeType);
					let cardType = document.createElement('h3');
					cardType.classList.add(`${result.data.types[i].type.name}`);
					cardType.classList.add('poke-type');
					cardType.appendChild(text);
					typeDiv.appendChild(cardType);
				}
			}
		});
		let link = document.createElement('a');
		link.href = `pages/${data[i].name}.html`;

		cardDiv.appendChild(typeDiv);
		link.appendChild(cardDiv);

		div.appendChild(link);
	}
}
function searchFilter() {
	var input = document.getElementById('search-box');
	var filter = input.value.toUpperCase();
	var div = document.getElementsByClassName('card-div');
	for (i = 0; i < div.length; i++) {
		sText = div[i].getElementsByClassName('poke-name')[0];
		sText2 = div[i].getElementsByClassName('poke-type')[0];
		// sText3 = div[i].getElementsByClassName("stock-id")[0];
		var txtValue = sText.textContent || sText.innerText;
		var txtValue2 = sText2.textContent || sText.innerText;
		// var txtValue3 = sText3.textContent || sText.innerText;
		if (
			txtValue.toUpperCase().indexOf(filter) > -1 ||
			txtValue2.toUpperCase().indexOf(filter) > -1
			// txtValue3.toUpperCase().indexOf(filter) > -1
		) {
			div[i].style.display = '';
		} else {
			div[i].style.display = 'none';
		}
	}
}
