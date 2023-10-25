"use strict";

const btn = document.querySelector("#next");
const card = document.querySelector("#pokemonContainer");
let pkmnNumber = 15;
let index = 1;

const pkmnData = (dexEntry) => {
  const pkmnType = dexEntry.types;
  const sprite = dexEntry.sprites.front_default;
  const name = dexEntry.name[0].toUpperCase() + dexEntry.name.slice(1);

  const html = `		<div class="pokemon ${pkmnType[0].type.name}">
    <div class="imgContainer">
        <img src="${sprite}" alt="${name}" />
    </div>
    <div class="info">
        <h3 class="name">${name}</h3>
        <span class="type">Type: <span>${pkmnType.length>1 ? `${pkmnType[0].type.name}-${pkmnType[1].type.name}` : pkmnType[0].type.name }</span></span>
    </div>
</div>`;
  card.insertAdjacentHTML("beforeend", html);
};

const whoDatPkmn = () => {
  for (let i = index; i <= pkmnNumber; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((res) => {
        //   console.log(res);
        return res.json();
      })
      .then((res) => pkmnData(res));
  }
};

// const whoDatPkmn = async () => {
//   for (let i = index; i <= pkmnNumber; i++) {
//     const get = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
//     const data = await get.json();
//     pkmnData(data);
//   }
// };

whoDatPkmn();

btn.addEventListener("click", () => {
  index += pkmnNumber;
  pkmnNumber += pkmnNumber;
  whoDatPkmn();
});

