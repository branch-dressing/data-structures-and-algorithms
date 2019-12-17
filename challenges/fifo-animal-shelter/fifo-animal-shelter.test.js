const {
    AnimalShelter
} = require('./fifo-animal-shelter');

describe('Animal Shelter', () => {
    const myShelter = new AnimalShelter();
    it('can add an animal', () => {
        myShelter.inTake('Dog', 'Sparky');
        expect(myShelter.whosHere()).toEqual(['A Dog named Sparky']);
        myShelter.inTake('Cat', 'Ronny');
        expect(myShelter.whosHere()).toEqual(['A Dog named Sparky', 'A Cat named Ronny']);
    });

    it('can remove an animal', () => {
        expect(myShelter.adopt('Dog')).toEqual('You adopted Sparky the Dog!')
    });
});
