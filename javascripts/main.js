import { getPetData } from './data/petData.js';
import { sortEvents } from './events.js';
const initializeApp = () => {
    getPetData();
    sortEvents();
};
initializeApp();