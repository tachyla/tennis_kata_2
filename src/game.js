const TennisPlayer = require('../src/tennisPlayer');
module.exports = class Game {
    constructor(){
        this.players = [];
    }

    scoreMap = {
        0: 'love', 
        1: 15, 
        2: 30, 
        3: 40
    };  

    addPlayer = (playerName) => {
        if(this.players.length <= 2){
            this.players.push({name: playerName, score: 0});
        }
        else{
            throw new Error('Error: A third player cannot be added');
        }
    }
    
    _getScore = (players) => {
        let get = (key) => this.scoreMap[key];
            
        players = this.players;

        if(players.length < 2){
            throw new Error('Must add 2 players to the game first');
        };
        
        let player1_score = this.players[0].score; 
        let player2_score = this.players[1].score;

        let bothEqualTo = (score) => {
            return (player1_score === score && player2_score === score);
        }
    
        if(bothEqualTo(0))return 'love all';
        
        if(bothEqualTo(1)) return '15 all';
      
        if(bothEqualTo(2)) return '30 all';
    
        if(bothEqualTo(3)) return 'duece';

        //Either PLAYER HAS AT LEAST 3 POINTS
        if(player1_score > 3 || player2_score > 3){
            if(player1_score === player2_score) return "duece"; 

            let difference = player1_score -  player2_score;  

            if(Math.abs(difference) >= 2) {
                if(this.checkDiff(difference)){
                    return 'player 1 wins';
                }
                return 'player 2 wins';
            }
            
            if(difference < 0){
                return 'player 2 advantage';
            }
            return 'player 1 advantage';
        } 
        let scoreResponse = `${get(player1_score)} - ${get(player2_score)}`; 
        return scoreResponse; 
    }

    checkDiff(difference) {
        return difference > 0;
    }

    _advancePlayer(player_name){
        for(let i = 0; i < this.players.length; i++){
            if(player_name === this.players[i].name){
               this.players[i].score++;
                return this.players[i].score;
            }
        }
    }
}
