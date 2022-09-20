const TennisPlayer = require('../src/tennisPlayer');
    
    describe('creates TennisPlayer class', () => {

        it('creates a tennis player with name playerOne', () => {
            let testTennisPlayer = new TennisPlayer('playerOne'); 
    
            expect(testTennisPlayer).toEqual({name: "playerOne", score: []});
        });
        
        //negative case : player with no name passed in 
        it('throws error when called without passing a name', () => {
            let testTennisPlayer = new TennisPlayer();

            let actualResult = testTennisPlayer.name;  
            let expectedResult = undefined;
            
            expect(actualResult).toEqual(expectedResult);
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