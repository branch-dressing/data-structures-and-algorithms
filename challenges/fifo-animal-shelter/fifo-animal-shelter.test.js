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

    it('can remove an animal based on preference', () => {
        expect(myShelter.adopt('Cat')).toEqual('You adopted Ronny the Cat!');
    });

    it('will reject if you try to adopt anything other than cat or dog', () => {
        expect(myShelter.adopt('Hamster')).toEqual('Sorry, we don\'t have that kind of animal right now.');
    })
});
