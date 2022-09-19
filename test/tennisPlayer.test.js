const TennisPlayer = require('../src/tennis-kata');
const Game = require('../src/game');
    
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
    });