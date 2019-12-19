const { multiBracketValidation } = require('./multiBracketValidation');

describe('Multi Bracket Validation', () => {
    it('can validate simple examples', () => {
        expect(multiBracketValidation('()')).toEqual(true);
        expect(multiBracketValidation('[]')).toEqual(true);
        expect(multiBracketValidation('{}')).toEqual(true);
    
    });
});

