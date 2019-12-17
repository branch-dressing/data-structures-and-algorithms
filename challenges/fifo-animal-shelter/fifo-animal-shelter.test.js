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
    });

    it('holds together removing from the ends.', () => {
        myShelter.inTake('Dog', 'Bear');
        myShelter.inTake('Dog', 'Sean');
        myShelter.inTake('Dog', 'Kathy');
        myShelter.inTake('Dog', 'James');
        expect(myShelter.whosHere()).toEqual([
            'A Dog named Sparky', 
            'A Dog named Bear', 
            'A Dog named Sean', 
            'A Dog named Kathy', 
            'A Dog named James']);
        expect(myShelter.adopt('Cat')).toEqual('Sorry, we don\'t have that kind of animal right now.');
        myShelter.inTake('Cat', 'Scott');
        expect(myShelter.whosHere()).toEqual([
            'A Dog named Sparky', 
            'A Dog named Bear', 
            'A Dog named Sean', 
            'A Dog named Kathy', 
            'A Dog named James',
            'A Cat named Scott']);
        expect(myShelter.adopt('Dog')).toEqual('You adopted Sparky the Dog!');
        expect(myShelter.adopt('Cat')).toEqual('You adopted Scott the Cat!');
        expect(myShelter.whosHere()).toEqual([
            'A Dog named Bear', 
            'A Dog named Sean', 
            'A Dog named Kathy', 
            'A Dog named James']);

        
    });
});
