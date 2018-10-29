import {sortPets} from "./components/petComponent.js";
const sortEvents = () => {
    const dog = document.getElementById('Dog');
    const cat = document.getElementById('Cat');
    const dino = document.getElementById('Dino');
    const all = document.getElementById('all');
    dog.addEventListener('click', sortPets);
    cat.addEventListener('click', sortPets);
    dino.addEventListener('click', sortPets);
    all.addEventListener('click', sortPets);
}
export {sortEvents}