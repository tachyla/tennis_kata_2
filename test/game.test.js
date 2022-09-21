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

        expect(result).toEqual([{player: 'bar'}]);
    });

    it('adds 2 players to game', () => {
        let newGame = new Game();
       const add_player1 = newGame.addPlayer('bar');
       const add_player2 = newGame.addPlayer('bash');
       
       let result = newGame.players;
       
       const expectedResult = [{player: 'bar'}, {player: 'bash'}];

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
            let newGame = new Game();
            let players = [];
            players.push(new TennisPlayer('Jane'));
            players.push(new TennisPlayer('John'));

            //players = [
                //{playerName: 'Jane', score: []}.
                //{playerName: 'John', score: []},
            // ];
            
            //increase score of player one
            newGame.advancePlayer("Jane");
            let result = newGame.players;
                    
            let expectedResult = [
                {playerName: 'Jane', score: 10},
                {playerName: 'John', score: []}
            ];

            expect(result).toEqual(expectedResult);
        });

    });
});
