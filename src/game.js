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

        if(player1_score >= 4 && player2_score < 2){
            let scoreResponse = 'Jane wins';
            return scoreResponse;
        }      

        //passes player[i]_score to get function; return score value
        let scoreResponse = `${get(player1_score)} - ${get(player2_score)}`;
        return scoreResponse;
    }

    //uses a pair of scores & determines game state
    checkPlayerState(player1, player2){
        let playerOne = this.players[0];
        let playerTwo = this.players[1];
        // check win cases 
            // 2 < difference 

            
        //player 2 scores advantage point
        if(playerOne.score === 3 && playerTwo.score > 3){
            let advantageDifference = 1;

            let playersDifference = playerTwo.score - playerOne.score;

            if(playersDifference === advantageDifference){
                return 'player 2 advantage';
            }
        }

        //player 1 score advantage point
        if(playerOne.score > 3 && playerTwo.score === 3){
            //playerOne.score => //4
            //playerTwo.score)=> //3
            let advantageDifference = 1;

            let playersDifference = playerOne.score - playerTwo.score;

            if(playersDifference === advantageDifference){ 
                return 'player 1 advantage';
            }
        }
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
