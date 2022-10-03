const Game = require('../src/game');
const TennisPlayer = require('../src/tennisPlayer');

describe('tests game class', () => {
    //before each tests requires creation of 2 players 
    it('creates a new game with no players', () => {
        let newGame = new Game();

        let result = newGame.players; 

        expect(result).toEqual([]);            
    });

    it('adds 1 player to game', () => {
        let newGame = new Game (); 
        newGame.addPlayer('bar');

        let result = newGame.players;

        expect(result).toEqual([{name: 'bar', score: 0}]);
    });

    it('adds 2 players to game', () => {
        let newGame = new Game();
       newGame.addPlayer('bar');
       newGame.addPlayer('bash');
       
       let result = newGame.players;
       
       const expectedResult = [{name: 'bar', score: 0}, {name: 'bash', score: 0}];

       expect(result).toEqual(expectedResult);
    });

    it('throws error when adding third player', () => {
        let newGame = new Game();
        let players = ['bar', 'bash', 'foo'];
        
        players.forEach((player) =>{newGame.addPlayer(player)});

        expect(() => {
            newGame.addPlayer('foo');
        }).toThrow('Error: A third player cannot be added');
    });

    describe('tests game scoring', () => {
        it('throws error when requesting score for game with 0 players', () => {
            let newGame = new Game();

            expect(() => {
                newGame._getScore();
            }).toThrow('Must add 2 players to the game first');
        });

        it('throws error when requesting score for game with 1 player', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);

            expect(() => {
                newGame._getScore();
            }).toThrow('Must add 2 players to the game first');
        });

        it('returns scoreResponse 15 - love when player 1 has scored', () => {
            let newGame = new Game();
            
            //create player 1 && player 2 
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);  

            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJohn.name); 
            
            //advance player 1     
            newGame._advancePlayer('Jane');
            let result = newGame._getScore(); 

            const expectedResult = '15 - love';

            expect(result).toEqual(expectedResult);
        });

        it('returns scoreResponse love - 15 when player 2 has scored', () => {
            let newGame = new Game();
            
            //create player 1 && player 2 
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);  

            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJohn.name); 
            
            //advance player 2  
            newGame._advancePlayer('John');
            let result = newGame._getScore(); 

            expect(result).toEqual('love - 15');
        });

    });

    describe('advancing players score', () => {
        it("increases score of player 1", () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
    
            newGame.addPlayer(playerJane.name);            
            newGame._advancePlayer('Jane');
            let result = newGame.players; 
            let expectedResult = [
                {name: 'Jane', score: 1}
            ];
    
            expect(result).toEqual(expectedResult);
        });
    
        it('returns 40 - love when player 1 has scored 3 times', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
    
            newGame._advancePlayer('Jane');
            newGame._advancePlayer('Jane');
            newGame._advancePlayer('Jane'); 
            
            let result = newGame._getScore();
            expect(result).toEqual('40 - love');            
        });

        it('returns "Player Name wins" when player has 40 and scores', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
    
            newGame._advancePlayer('Jane');
            newGame._advancePlayer('Jane');
            newGame._advancePlayer('Jane');
            newGame._advancePlayer('Jane');

            let result = newGame._getScore();

            expect(result).toEqual('Jane wins');
        });

        it('returns 30 - love when player 1 has scored twice', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
            newGame._advancePlayer('Jane');
            newGame._advancePlayer('Jane');
            
            let result = newGame._getScore();
            expect(result).toEqual('30 - love');
        });

        it('increases player 2 score', () => {
            const newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');
    
            newGame.addPlayer('Jane');
            newGame.addPlayer('John');
    
            newGame._advancePlayer(playerJohn.name);
            
            const result = newGame.players;
    
            const expectedResult = [
                {name: 'Jane', score: 0}, 
                {name: 'John', score: 1}];

            expect(result).toEqual(expectedResult);
            
        });
    }); 

    describe('case when players have identical scores', () => {
        it('returns "love-all" for a new games score', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);

            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJohn.name); 
            
            let result = newGame._getScore();
            const expectedScore = 'love all'; 

            expect(result).toEqual(expectedScore);
        });

        it('returns  "15 all" when both players have scored', () => {
            let newGame = new Game();

            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);

            newGame._advancePlayer('Jane');
            newGame._advancePlayer('John');

            let result = newGame._getScore();
            expect(result).toEqual('15 all'); 
        });

        it('returns "30 all" when both players have have scored', () => {
            let { newGame, playerJane, playerJohn } = newFunction();
            
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);
            
            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);

            let result = newGame._getScore();

            expect(result).toEqual('30 all');

            function newFunction() {
                let newGame = new Game();
                let playerJane = new TennisPlayer('Jane');
                let playerJohn = new TennisPlayer('John');

                newGame.addPlayer(playerJane.name);
                newGame.addPlayer(playerJohn.name);
                return { newGame, playerJane, playerJohn };
            }
        });

        it('returns "duece" when both players have have scored', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
            
            //helper could advance player by x points
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);

            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);

            let result = newGame._getScore();

            expect(result).toEqual('duece');
        });
    });

    describe('tests game state', () => {
        it("returns player 2 advantage when player's score difference is 1", () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
            
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);

            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);

           let result = newGame.checkPlayerState(playerJane, playerJohn);

            expect(result).toEqual('player 2 advantage');
        });
    });

    describe('tests advantage state', () => {
        
        it('returns player 1 advantage', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);

            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);

            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);

            let result = newGame.checkPlayerState(playerJane, playerJohn);
            expect(result).toEqual('player 1 advantage');
        });

        it('returns duece when players have score 3 or more', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
            
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);
            newGame._advancePlayer(playerJane.name);

            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);
            newGame._advancePlayer(playerJohn.name);

            
            let result = newGame._getScore();
            expect(result).toEqual('duece');
        });
    });
});

