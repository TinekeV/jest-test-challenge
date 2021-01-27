//importeren
const sizeRoom = require('./index').sizeRoom;
const arrayToString = require('./index').arrayToString;

test('sizeRoom function returns total size of room', () => {
    // ARRANGE
    const length = 25;
    const width = 37;

    // ACT
    const roomSize = sizeRoom(length, width);

    // ASSERT
    expect(roomSize).toBe(925)
});


test('arrayToString function should add two arrays and turn it into one string', () => {
    //ARRANGE
    const string = 'Voorwerpen in je huis: '
    const array1 = ['telefoon', 'televisie', 'plant', 'schilderij' , 'mok'];
    const array2 = ['tafel', 'boek', 'puzzel'];

    // ACT
    const sentence = string + arrayToString(array1, array2)

    // om te controleren of gewenste resultaat klopt
    // console.log('RESULTAAT:', sentence)

    // ASSERT
    expect(sentence).toEqual('Voorwerpen in je huis: telefoon, televisie, plant, schilderij, mok, tafel, boek, puzzel')

});