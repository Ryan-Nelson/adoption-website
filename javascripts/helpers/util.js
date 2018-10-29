const printToDom = (stringToPrint) => {
    const selectedDiv = document.getElementById('pets');
    selectedDiv.innerHTML = stringToPrint;
};

export {printToDom};