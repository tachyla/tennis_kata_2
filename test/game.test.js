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
       const add_player1 = newGame.addPlayer('bar');
       const add_player2 = newGame.addPlayer('bash');
       
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
        it("a new game score is 'love-all'", () => {
            let newGame = new Game();

            let result = newGame.getScore(); 

            const expectedScore = 'love all'; 

            expect(result).toEqual(expectedScore);
        });
        it("increases score of player 1", () => {
            //create game
            let newGame = new Game();
            //create player
            let playerJane = new TennisPlayer('Jane');
            let playerJohn = new TennisPlayer('John');

            //add player to game
            newGame.addPlayer(playerJane.name); 
            console.log(newGame.players[0]);
           
            //advance jane score
            newGame.advancePlayer('Jane');
            let result = newGame.players;
                    
            let expectedResult = [
                {name: 'Jane', fooScore: [10]}
            ];

            expect(result).toEqual(expectedResult);
        });

    });
});
