let d =document;
let w = window;




const pokemonContainer = d.querySelector(".pokemon-container");

function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then((res) => res.json())
  .then((data)=> console.log(data));
}

function fetchPokemons(number){
  for(let i=1 ; i <= number; i++){
  }
}

function createPokemon(pokemon){
  const card = d.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = d.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = d.createElement('img');
  sprite.src=pokemon.sprites.font_default

  spriteContainer.appendChild(sprite);
}