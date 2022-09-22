const TennisPlayer = require('../src/tennisPlayer');
module.exports = class Game {
    constructor(){
        this.players = [];
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
        for(let i = 0; i < this.players.length; i++){
            if(player_name === this.players[i].name){
                let player_currentScore = this.players[i].fooScore;
                player_currentScore.push(10);
            }
        }
    };
}
