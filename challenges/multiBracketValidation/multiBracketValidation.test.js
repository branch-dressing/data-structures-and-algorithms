const { multiBracketValidation } = require('./multiBracketValidation');

describe('Multi Bracket Validation', () => {
    it('can validate simple examples', () => {
        expect(multiBracketValidation('()')).toEqual(true);
        expect(multiBracketValidation('[]')).toEqual(true);
        expect(multiBracketValidation('{}')).toEqual(true);
        expect(multiBracketValidation('[')).toEqual(false);
        expect(multiBracketValidation(']')).toEqual(false);
    });

    it('can validate the examples from code challenge', () => {
        expect(multiBracketValidation('{}(){}')).toEqual(true);
        expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
        expect(multiBracketValidation('(){}[[]]')).toEqual(true);
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
        expect(multiBracketValidation('[({}]')).toEqual(false);
        expect(multiBracketValidation('(](')).toEqual(false);
        expect(multiBracketValidation('{(})')).toEqual(false);
    });
});

