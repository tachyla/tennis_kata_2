const TennisPlayer = require('../src/tennisPlayer');
module.exports = class Game {
    constructor(){
        this.players = [];
        this.currentScore = {};
    }
    //initialize player with name & fooScore
    addPlayer = (playerName) => {
        if(this.players.length <= 2){
            this.players.push({name: playerName, fooScore: []});
        }
        else{
            throw new Error('Error: A third player cannot be added');
        }
    }

    getScore = () => {
        let scoreResponse = 'love all';
        return scoreResponse;
    }

    advancePlayer(player_name){
        if(player_name === this.players[0].name){
            let player_currentScore = this.players[0].fooScore //[]
            player_currentScore.push(10);
            console.log(player_currentScore);
            return this.players[0];
        }
    };
}
