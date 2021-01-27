// --------------------------------------------------------------------------------------------------------------
// OEFENING 1
// schrijf een functie die het oppervlak van een bepaalde ruimte teruggeeft

function sizeRoom(length, width) {
    return length * width
}


//---------------------------------------------------------------------------------------------------------------
// OEFENING 2
// schrijf een functie die twee arrays samenvoegt en omgezet wordt naar een string

function arrayToString(array1, array2) {
    const fullArray = array1.concat(array2);
    return fullArray.join(', ');
}

// om te controleren of de functie werkt
console.log(arrayToString(['trap', 'plant', 'hoed'], ['stoel', 'bank']))

module.exports = {
    sizeRoom: sizeRoom,
    arrayToString: arrayToString,
};

