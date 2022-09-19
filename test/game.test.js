const Game = require('../src/game');

describe('tests game class', () => {
    it('creates a new game with no players', () => {
        let newGame = new Game();

        let result = newGame.players; 

        expect(result).toEqual([]);            
    });

    it('adds 1 player to game', () => {
        let newGame = new Game (); 
        const add_player = newGame.addPlayer('bar');

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

        const add_player1 = newGame.addPlayer('bar');
        const add_player2 = newGame.addPlayer('bash');
        let error_player3 = newGame.addPlayer('foo');

        expect(error_player3).toEqual('Error: cannot add a third player');

    });
});
