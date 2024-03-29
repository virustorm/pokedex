const url = 'https://pokeapi.co/api/v2/';

axios.get(`${url}pokemon/3`).then((result) => createPoke(body, result.data));

// axios.get(`${url}pokemon/2`).then((result) => {
// 	console.log(result.data.moves);
// });

let body = document.getElementById('bulbasaur__body');

function createPoke(div, data) {
	let name = document.createElement('h1');
	var text = document.createTextNode(data.name);
	name.classList.add('pokemonPage-title');
	name.appendChild(text);
	let pokeImg = document.createElement('img');
	pokeImg.classList.add('pokemonPage-img');
	pokeImg.src = data.sprites.front_default;
	let typeDiv = document.createElement('div');
	typeDiv.classList.add('typeDiv-s');
	let pokeType = '';
	axios.get(`${url}pokemon/3`).then(function(result) {
		if (result.data.types.length === 1) {
			pokeType = `	 ${result.data.types[0].type.name}`;
			text = document.createTextNode(pokeType);
			let cardType = document.createElement('h3');
			cardType.classList.add(`${result.data.types[0].type.name}`);
			cardType.classList.add('poke-type-s');
			cardType.appendChild(text);
			typeDiv.appendChild(cardType);
		} else if (result.data.types.length === 2) {
			for (i = 0; i < result.data.types.length; i++) {
				pokeType = `	 ${result.data.types[i].type.name}`;
				text = document.createTextNode(pokeType);
				let cardType = document.createElement('h3');
				cardType.classList.add(`${result.data.types[i].type.name}`);
				cardType.classList.add('poke-type-s');
				cardType.appendChild(text);
				typeDiv.appendChild(cardType);
			}
		}
	});
	let statMainDiv = document.createElement('div');
	statMainDiv.classList.add('pokemonPage-stats');
	let statTitle = document.createElement('h3');
	var text = document.createTextNode('Base Stats');
	statTitle.appendChild(text);
	statMainDiv.appendChild(statTitle);
	let pokemonStatDiv1 = document.createElement('div');
	for (i = 0; i < 3; i++) {
		let statH = document.createElement('h5');
		var statText = document.createTextNode(`${data.stats[i].stat.name} : ${data.stats[i].base_stat}`);
		statH.appendChild(statText);
		pokemonStatDiv1.appendChild(statH);
	}
	statMainDiv.appendChild(pokemonStatDiv1);
	let pokemonStatDiv2 = document.createElement('div');
	for (i = 3; i < 6; i++) {
		let statH = document.createElement('h5');
		var statText = document.createTextNode(`${data.stats[i].stat.name} : ${data.stats[i].base_stat}`);
		statH.appendChild(statText);
		pokemonStatDiv2.appendChild(statH);
	}
	statMainDiv.appendChild(pokemonStatDiv2);
	let pokemonMoveMainDiv = document.createElement('div');
	let moveTitle = document.createElement('h3');
	var text = document.createTextNode('Moves');
	moveTitle.appendChild(text);
	pokemonMoveMainDiv.appendChild(moveTitle);

	pokemonMoveMainDiv.classList.add('pokemonPage-move');
	for (i = 0; i < data.moves.length; i++) {
		let moveH = document.createElement('h5');
		var moveText = document.createTextNode(data.moves[i].move.name);
		moveH.appendChild(moveText);
		pokemonMoveMainDiv.appendChild(moveH);
	}

	div.appendChild(name);
	div.appendChild(pokeImg);
	div.appendChild(typeDiv);
	div.appendChild(statMainDiv);
	div.appendChild(pokemonMoveMainDiv);
}
