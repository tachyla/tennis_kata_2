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

        expect(result).toEqual([{name: 'bar', fooScore: ['love']}]);
    });

    it('adds 2 players to game', () => {
        let newGame = new Game();
       newGame.addPlayer('bar');
       newGame.addPlayer('bash');
       
       let result = newGame.players;
       
       const expectedResult = [{name: 'bar', fooScore: ['love']}, {name: 'bash', fooScore: ['love']}];

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

        it('throws error when requesting score for game with 1 player', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);

            expect(() => {
                newGame.getScore();
            }).toThrow('Must add 2 players to the game first');
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

        it('returns scoreResponse 15 - love when player 1 has scored', () => {
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

        it('returns scoreResponse love - 15 when player 2 has scored', () => {
            let newGame = new Game();
            
            //create player 1 && player 2 
            let playerJane = new TennisPlayer('Jane');
            newGame.addPlayer(playerJane.name);  

            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJohn.name); 
            
            //advance player 2  
            newGame.advancePlayer('John');
            let result = newGame.getScore(); 

            expect(result).toEqual('love - 15');
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
            let result = newGame.players; //should call newGame.getScore('Jane') => 15 OR newGame.players[0]
                    
            let expectedResult = [
                {name: 'Jane', fooScore: ['love', 15]}
            ];
    
            expect(result).toEqual(expectedResult);
        });
    
        it('returns 40 - love when player 1 has scored 3 times', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
    
            newGame.advancePlayer('Jane');
            newGame.advancePlayer('Jane');
            newGame.advancePlayer('Jane');
            
            let result = newGame.getScore();
            expect(result).toEqual('40 - love');            
        });

        it('returns 30 - love when player 1 has scored twice', () => {
            let newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);
            newGame.advancePlayer('Jane');
            newGame.advancePlayer('Jane');
            
            let result = newGame.getScore();
            expect(result).toEqual('30 - love');
        });

        it('increases player 2 score', () => {
            const newGame = new Game();
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');
    
            newGame.addPlayer('Jane');
            newGame.addPlayer('John');
    
            newGame.advancePlayer('John');
    
            const result = newGame.players;
    
            const expectedResult = [ {name: 'Jane', fooScore: ['love']}, {name: 'John', fooScore: ['love', 15]} ];
            expect(result).toEqual(expectedResult);
        });

        it('returns scoreResponse 15 - 15 when both players have scored', () => {
            let newGame = new Game();

            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');
            newGame.addPlayer(playerJane.name);
            newGame.addPlayer(playerJohn.name);

            newGame.advancePlayer('Jane');
            newGame.advancePlayer('John');

            let result = newGame.getScore();
            expect(result).toEqual('15 - 15'); 
        });
    }); 
});

