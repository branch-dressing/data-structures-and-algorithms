const {
    AnimalShelter
} = require('./fifo-animal-shelter');

describe('Animal Shelter', () => {
    const myShelter = new AnimalShelter();
    it('can add an animal', () => {
        myShelter.enqueue('Dog', 'Sparky');
        expect(myShelter.whosHere()).toEqual(['A Dog named Sparky']);

    });
});
