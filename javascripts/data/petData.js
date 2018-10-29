import {petBuilder, setPets, getPetz} from '../components/petComponent.js';

function fileLoadSuccess () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petBuilder(getPetz());
}

function fileLoadError () {
    console.log('things are broken');
}

const getPetData = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', fileLoadSuccess);
    myRequest.addEventListener('error', fileLoadError);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
}

export {getPetData}