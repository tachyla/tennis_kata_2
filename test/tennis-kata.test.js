// Tennis

// The scoring system is rather simple:

// Each player can have either of these points in one game “love” “15” “30” “40”
// If you have 40 and you win the point you win the game, however there are special rules.
// If both have 40 the players are “deuce”.
// If the game is in deuce, the winner of a point will have advantage
// If the player with advantage wins the ball he wins the game
// If the player without advantage wins they are back at deuce.
// Alternate description of the rules per Wikipedia (http://en.wikipedia.org/wiki/Tennis#Scoring ):

// A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
// The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “15”, “30”, and “40” respectively.
// If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.
// If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

const TennisPlayer = require('../src/tennis-kata');
const Game = require('../src/game');

describe('tennis game', () => {
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

    describe('tests game class', () => {
        it('creates a new game with no players', () => {
            let newGame = new Game();

            let result = newGame.players; 

            expect(result).toEqual({});            
        });

        it('adds 1 player to game', () => {
            let newGame = new Game (); 
            const add_player = newGame.addPlayer('bar');

            let result = newGame.players = { player_1: 'bar'};

            expect(result).toEqual( {player_1: 'bar'});
        });

        it('adds 2 players to game', () => {
            let newGame = new Game();
           const add_player1 = newGame.addPlayer('bar');
           const add_player2 =newGame.addPlayer('bash');
           
           let result = newGame.players;
           
           const expectedResult = {player_1: 'bar', player_2: 'bash'};

           expect(result).toEqual(expectedResult);
        });
    });
});