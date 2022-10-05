const Game = require('../src/game');
const TennisPlayer = require('../src/tennisPlayer');

describe('testGame creates game & 2 players', () => {
    let testGame;

    //create players before Each test in this describe block
    beforeEach(() => {
        testGame = new Game();
        
        let playerJane = new TennisPlayer('Jane');
        testGame.addPlayer(playerJane.name);
        let playerJohn = new TennisPlayer('John');
        testGame.addPlayer(playerJohn.name);
    });

    describe('tests player creation', () => {
        let myTestGame;

        beforeEach(() => {
            myTestGame = new Game();
        });

        it('creates a new game with 0 players', () => {    
            let result = myTestGame.players; 
    
            expect(result).toEqual([]);            
        });

        it('adds 1 player to game', () => {
            myTestGame.addPlayer('bar');
    
            let result = myTestGame.players;
    
            expect(result).toEqual([{name: 'bar', score: 0}]);
        });

        it('adds 2 players to game', () => {
           myTestGame.addPlayer('bar');
           myTestGame.addPlayer('bash');
        
           let result = myTestGame.players;
           
           const expectedResult = [{name: 'bar', score: 0}, {name: 'bash', score: 0}];
    
           expect(result).toEqual(expectedResult);
        });
        
        describe('player creation error case', () => {
            it('throws error when adding third player', () => {
                let players = ['bar', 'bash', 'foo'];
                
                players.forEach((player) =>{myTestGame.addPlayer(player)});
        
                expect(() => {
                    myTestGame.addPlayer('foo');
                }).toThrow('Error: A third player cannot be added');
            });
        });

        describe('tests scoring error state', () => {
            it('throws error when requesting score for game with 0 players', () => {
                // let newGame = new Game();
        
                expect(() => {
                    myTestGame._getScore();
                }).toThrow('Must add 2 players to the game first');
            });
        });
    });

    describe('tests scoring functionality', () => {
        // this error case only needs a new game
        it('throws error when requesting score for game with 1 player', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);

            expect(() => {
                newGame._getScore();
            }).toThrow('Must add 2 players to the game first');
        });

        it('returns "15 - love" when score is 1 - 0', () => {   
            testGame._advancePlayer('Jane');
            let result = testGame._getScore(); 

            const expectedResult = '15 - love';

            expect(result).toEqual(expectedResult);
        });

        it('returns "love - 15" when score is 0 - 1', () => {
            testGame._advancePlayer('John');
            let result = testGame._getScore(); 

            expect(result).toEqual('love - 15');
        });

    });

    describe('advancing players score', () => {

        it('increases player 1 score', () => {          
            testGame._advancePlayer('Jane');
            
            let result = testGame.players;

            let expectedResult = [
                {name: 'Jane', score: 1},
                {name: 'John', score: 0}
            ];

            expect(result).toEqual(expectedResult);
        });

        it('increases player 2 score', () => {
            testGame._advancePlayer('John');
            
            const result = testGame.players;
    
            const expectedResult = [
                {name: 'Jane', score: 0}, 
                {name: 'John', score: 1}];

            expect(result).toEqual(expectedResult);
            
        });
    
        it('returns "40 - love" when score is 4 - 1', () => {    
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane'); 
            
            let result = testGame._getScore();
            expect(result).toEqual('40 - love');            
        });

        it('returns "30 - love" when score is 2 - 0', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            
            let result = testGame._getScore();
            expect(result).toEqual('30 - love');
        });
    }); 

    describe('tests when players have identical scores', () => {
        it('returns "love-all" for a new games score', () => {
            let result = testGame._getScore();
            const expectedScore = 'love all'; 

            expect(result).toEqual(expectedScore);
        });

        it('returns "15 all" when both players have scored', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('John');

            let result = testGame._getScore();
            expect(result).toEqual('15 all'); 
        });

        it('returns "30 all" when both players have have scored', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();

            expect(result).toEqual('30 all');
        });

        it('returns "duece" when scored is 3 - 3 ', () => {
            //helper could advance player by x points
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();

            expect(result).toEqual('duece');
        });
    });

    describe('tests game state', () => {
        it("returns player 2 advantage when player's score difference is 1", () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

           let result = testGame._getScore();

            expect(result).toEqual('player 2 advantage');
        });
    });

    describe('tests advantage state', () => {

        it('returns player 1 advantage', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();
            expect(result).toEqual('player 1 advantage');
        });

        it('returns duece when players have score 3 or more', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();
            expect(result).toEqual('duece');
        });

        it('returns player 2 advantage when score is 4 - 5', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');


            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();
            expect(result).toEqual('player 2 advantage');
        });

        it('returns "duece" when score is 5 - 5', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();
            expect(result).toEqual('duece');
        });

        it('returns duece when score is 6 - 6', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();
            expect(result).toEqual('duece');
        });

        it('returns duece when score is 7 - 7', () => {
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore();
            expect(result).toEqual('duece');
        });

        it('returns "player 2 wins" when score is 1 - 4', () => {
            testGame._advancePlayer('Jane');

            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');
            testGame._advancePlayer('John');

            let result = testGame._getScore(); 
            expect(result).toEqual('player 2 wins');
        });
    });
});

