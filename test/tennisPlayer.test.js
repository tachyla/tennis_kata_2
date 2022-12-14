const TennisPlayer = require('../src/tennisPlayer');
    
    describe('creates TennisPlayer class', () => {

        it('creates a tennis player with name playerOne', () => {
            let testTennisPlayer = new TennisPlayer('playerOne'); 
    
            expect(testTennisPlayer).toEqual({name: "playerOne", score: []});
        });

        it('creates a tennis player with name & score property', () => {
            let testTennisPlayer = new TennisPlayer('playerTwo');
    
            expect(testTennisPlayer).toEqual({name: 'playerTwo', score: []});
        });
    
        it("returns player's score when providided a name", () => {
            let testTennisPlayer = new TennisPlayer('foo');
    
            let result = testTennisPlayer.getScore('foo');
            let expectedResult = [];
    
            expect(result).toEqual(expectedResult);
        });    

        it('throws error when called without passing a name', () => {

            expect(() => {
                new TennisPlayer();
            }).toThrow('Tennis Player requires a name');
        });

        it('throws error when empty string is passed', () => {

            expect(() => {
                new TennisPlayer("");
            }).toThrow("Tennis Player requires a name at least 2 characters");
        });
    });