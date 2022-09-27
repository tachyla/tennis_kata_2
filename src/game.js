const TennisPlayer = require('../src/tennisPlayer');
module.exports = class Game {
    constructor(){
        this.players = [];
    }
    //initialize player with name & fooScore
    addPlayer = (playerName) => {
        if(this.players.length <= 2){
            this.players.push({name: playerName, fooScore: ['love']});
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
        
        //player1 = 0 && player2 = 0
        if(players[0].fooScore.length === 1){
                //player1 = 0 player2 = 0
            if(players[1].fooScore.length === 1 ){  
                let scoreResponse = 'love all';
                return scoreResponse;
            }
        }
        
        //player1 = [love] && player2 = ['love', 15] 
        if(players[0].fooScore.length === 1){
            if(players[1].fooScore.length === 2){
                let scoreResponse = 'love - 15';
                return scoreResponse;
            }
        }
            // player1 = [love, 15] && player2 = [love]
        if(players[0].fooScore.length === 2){
            // player1 = 15 && player2 = 0
            if(players[1].fooScore.length === 1){
                let scoreResponse = '15 - love';
                return scoreResponse;
            }
        }
        // player1 = [love, 15] && // player1 = [love, 15]
        if(players[0].fooScore.length === 2){
            if(players[1].fooScore.length === 2){
                let player1_score = players[0].fooScore[1];
                let player2_score =  players[1].fooScore[1];
                let scoreResponse = `${player1_score} - ${player2_score}`;
                return scoreResponse;
            }
        }
        if(players[0].fooScore.length === 3){
            if(players[1].fooScore.length === 1){
                let player1_score = players[0].fooScore[2];
                let player2_score = players[1].fooScore[0];
                let scoreResponse = `${player1_score} - ${player2_score}`;
                console.log(scoreResponse);
                return scoreResponse;
            }
        }
        else{
            let player1_score = players[0].fooScore.at(-1);
            let player2_score = players[1].fooScore(-1);
            let scoreResponse = `${player1_score} - ${player2_score}`;
            return scoreResponse;
        }
    }

    advancePlayer(player_name){ 

        let scorePossibilities = ['love', 15, 30, 40];

        for(let i = 0; i < this.players.length; i++){
            if(player_name === this.players[i].name){
                let player_currentScore = this.players[i].fooScore;

                if(player_currentScore.length === 2){
                        player_currentScore.push(30);
                }
                
                if(player_currentScore.length === 1){
                    player_currentScore.push(15);
                }
            }
        }
    }
}
