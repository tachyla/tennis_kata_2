module.exports = class Game {
    constructor(players){
        this.players = {};
    }
    
    addPlayer = (playerName) => {
        this.players = {player_1: playerName};
    }
}