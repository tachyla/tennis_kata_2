const Game = require('../src/game');
const TennisPlayer = require('../src/tennisPlayer');

describe('tests game class', () => {
    it('creates a new game with no players', () => {
        let newGame = new Game();

        let result = newGame.players; 

        expect(result).toEqual([]);            
    });

    it('adds 1 player to game', () => {
        let newGame = new Game (); 
        newGame.addPlayer('bar');

        let result = newGame.players;

        expect(result).toEqual([{name: 'bar', fooScore: []}]);
    });

    it('adds 2 players to game', () => {
        let newGame = new Game();
       newGame.addPlayer('bar');
       newGame.addPlayer('bash');
       
       let result = newGame.players;
       
       const expectedResult = [{name: 'bar', fooScore: []}, {name: 'bash', fooScore: []}];

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
                newGame.getScore();
            }).toThrow('Must add players to game first');
        });

        it("a new game score is 'love-all'", () => {
            let newGame = new Game();
            
            //create player 1 && player 2 

            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);

            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJohn.name); 
            
            let result = newGame.getScore();

            const expectedScore = 'love all'; 
            expect(result).toEqual(expectedScore);
        });

        it('returns 15 - love when player 1 has scored', () => {
            let newGame = new Game();
            
            //create player 1 && player 2 
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);  

            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJohn.name); 
            
            //advance player 1     
            newGame.advancePlayer('Jane');
            let result = newGame.getScore(); 

            const expectedResult = '15 - love';

            expect(result).toEqual(expectedResult);
        });
    });
    describe('advancing players score', () => {
        it("increases score of player 1", () => {
            //create game
            let newGame = new Game();
            //create player
            let playerJane = new TennisPlayer('Jane');
    
            newGame.addPlayer(playerJane.name);            
            newGame.advancePlayer('Jane');
            let result = newGame.players;
                    
            let expectedResult = [
                {name: 'Jane', fooScore: [10]}
            ];
    
            expect(result).toEqual(expectedResult);
        });
    
        it('increases player 2 score', () => {
            const newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');
    
            newGame.addPlayer('Jane');
            newGame.addPlayer('John');
    
            newGame.advancePlayer('John');
    
            const result = newGame.players;
    
            const expectedResult = [ {name: 'Jane', fooScore: []}, {name: 'John', fooScore: [10]} ];
            expect(result).toEqual(expectedResult);
        });
    });
    
});

