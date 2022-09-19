module.exports = class Game {
    constructor(players){
        this.players = [];
    }

    addPlayer = (playerName) => {
        this.players.push({player: playerName});
    }
}