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

    getScore = (players) => {
        players = this.players;

        if(players.length === 0){
            throw new Error('Must add players to game first');
        }
        if(players.length < 2){
            throw new Error('Must add 2 players to the game first');
        };
        
            //player1 = 0
        if(players[0].fooScore[0] === undefined){
                //player1 = 0 player2 = 0
            if(players[1].fooScore[0] === undefined){  
                let scoreResponse = 'love all';
                return scoreResponse;
            }
                //player2 = 15 && player1 = 0
            if(players[1].fooScore[0] === 15){
                let scoreResponse = 'love - 15';
                return scoreResponse;
            }
        }
            // player2 = 0
        if(players[1].fooScore[0] === undefined){
            // player1 = 15 && player2 = 0
            if(players[0].fooScore[0] === 15){
                let scoreResponse = '15 - love';
                return scoreResponse;
            }
        }
        else{
            let player1 = players[0].fooScore[0];
            let player2 = players[1].fooScore[0];
            let scoreResponse = `${player1} - ${player2}`;
            return scoreResponse;
        }
    }

    advancePlayer(player_name){
        for(let i = 0; i < this.players.length; i++){
            if(player_name === this.players[i].name){
                let player_currentScore = this.players[i].fooScore;
                player_currentScore.push(15);
            }
        }
    }
}
