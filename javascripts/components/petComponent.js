import {printToDom} from "../helpers/util.js";

let pets = [];
const setPets = (newArray) => {
    pets = newArray;
}
const getPetz = () => {
    return pets;
}
const petBuilder = (petsArray) => {
    let domString = ""
    for (let i = 0; i < petsArray.length; i++) {
        domString += `<div class="card text-center m-3" style="width: 18rem;">`
        domString += `<div class="card-header">`
        domString += `<h3>${petsArray[i].name}</h3>`
        domString += `</div>`
        domString += `<div class="card-body">`
        domString += `<img class="card-img-top" src="${petsArray[i].imageUrl}" alt="${petsArray[i].name}">`
        domString += `<p class="card-text mt-1">${petsArray[i].color}</p>`
        domString += `<p class="card-text">${petsArray[i].specialSkill}</p>`
        domString += `</div>`
        domString += `<div class="card-footer text-${petsArray[i].text}" style="background-color: ${petsArray[i].background};">`
        domString += `<h3>${petsArray[i].type}</h3>`
        domString += `</div>`
        domString += `</div>`
    } 
    printToDom(domString, 'pets');
}
const sortPets = (e) => {
    const button = e.target.id;
    if (button === 'all') {
        petBuilder(pets);
    } else {
        const filteredPets = pets.filter(x => x.type === button);
        petBuilder(filteredPets);
    }
}
export {petBuilder, pets, getPetz, sortPets, setPets};