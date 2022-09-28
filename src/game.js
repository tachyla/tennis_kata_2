const TennisPlayer = require('../src/tennisPlayer');
module.exports = class Game {
    constructor(){
        this.players = [];
    }

    //switch statement can be used to return player score from scoreMap
    scoreMap = {
        0: 'love', 
        1: 15, 
        2: 30, 
        3: 40
    };  

    //initialize player with props name, fooScore, score
    addPlayer = (playerName) => {
        if(this.players.length <= 2){
            this.players.push({name: playerName, score: 0});
        }
        else{
            throw new Error('Error: A third player cannot be added');
        }
    }
    
    // get (scoreMap[key]) => value 
    get(key){ 
        if(key in this.scoreMap){
            let valueResponse = this.scoreMap[key];
            return valueResponse;
        }
        if(!key) return undefined; 
    }

    _getScore = (players) => {
        players = this.players;
        
        if(players.length < 2){
            throw new Error('Must add 2 players to the game first');
        };
        
        let player1_score = this.players[0].score; 
        let player2_score = this.players[1].score;

        //passes player[i]_score to get function; return score value
        let scoreResponse = `${this.get(player1_score)} - ${this.get(player2_score)}`;
       
        //compare player1 to player 2      
        if(player1_score === 0 && player2_score === 0){
            let scoreResponse = 'love all';
            return scoreResponse;
        }
        if(player1_score === 1 && player2_score === 1){
            let scoreResponse = '15 all';
            return scoreResponse;
        }

        if(player1_score > 3 && player2_score < 2){
            let scoreResponse = 'Jane wins';
            return scoreResponse;
        }
        // if players[i].score is 4+ duece message is possibility
        return scoreResponse;
    }

    //passes in player name; increases score by 1 
    _advancePlayer(player_name){
        for(let i = 0; i < this.players.length; i++){
            if(player_name === this.players[i].name){
               this.players[i].score++;
                return this.players[i].score;
            }
        }
    }
}
