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
        // if players[i].score is 4+ duece message is possibility
    };  


    //initialize player with props name, fooScore, score
    addPlayer = (playerName) => {
        if(this.players.length <= 2){
            this.players.push({name: playerName, fooScore: ['love'], score: 0});
        }
        else{
            throw new Error('Error: A third player cannot be added');
        }
    }
    
    //get Score pair from map & relay message 
    // getScore = (players) => {
    //     players = this.players;

    //     if(players.length < 2){
    //         throw new Error('Must add 2 players to the game first');
    //     };
        
    //     //player1 = [love] && player2 = [love]
    //     if(players[0].fooScore.length === 1){
    //         if(players[1].fooScore.length === 1 ){  
    //             let scoreResponse = 'love all';
    //             return scoreResponse;
    //         }
    //     }        
    //     //player1 = [love] && player2 = ['love', 15] 
    //     if(players[0].fooScore.length === 1){
    //         if(players[1].fooScore.length === 2){
    //             let scoreResponse = 'love - 15';
    //             return scoreResponse;
    //         }
    //     }
    //     // player1 = [love, 15] && player2 = [love]
    //     if(players[0].fooScore.length === 2){
    //         // player1 = 15 && player2 = 0
    //         if(players[1].fooScore.length === 1){
    //             let scoreResponse = '15 - love';
    //             return scoreResponse;
    //         }
    //     }
    //     // player1 = [love, 15] && // player1 = [love, 15]
    //     if(players[0].fooScore.length === 2){
    //         if(players[1].fooScore.length === 2){
    //             let player1_score = players[0].fooScore[1];
    //             let player2_score =  players[1].fooScore[1];
    //             let scoreResponse = `${player1_score} - ${player2_score}`;
    //             return scoreResponse;
    //         }
    //     }
    //     if(players[0].fooScore.length === 3){
    //         if(players[1].fooScore.length === 1){
    //             let player1_score = players[0].fooScore[2];
    //             let player2_score = players[1].fooScore[0];
    //             let scoreResponse = `${player1_score} - ${player2_score}`;
    //             return scoreResponse;
    //         }
    //     }
    //     if(players[0].fooScore.length === 4){
    //         if(players[1].fooScore.length === 1){
    //             let player1_score = players[0].fooScore[3];
    //             let player2_score = players[1].fooScore[0];
    //             let scoreResponse = `${player1_score} - ${player2_score}`;
    //             return scoreResponse;
    //         }
    //     }

    //     if(players[0].fooScore.length === 5){
    //         if(players[1].fooScore.length <= 3){
    //             let scoreResponse = players[0].fooScore[4];
    //             return scoreResponse;
    //         }
    //     }
    // }
    
    // get (scoreMap[key]) => value 
    get(key){ 
        if(key in this.scoreMap){
            let valueResponse = this.scoreMap[key];
            console.log(valueResponse);
            return valueResponse;
        }

        if(!key) return undefined; 
    }

    _getScore = (players) => {
        players = this.players;
        
        if(players.length < 2){
            throw new Error('Must add 2 players to the game first');
        };
        
        let player1_score = this.players[0].score; //1: 15
        let player2_score = this.players[1].score; //1: 15

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
    advancePlayer(player_name){ 
                //score possibilities can use map
        for(let i = 0; i < this.players.length; i++){
            if(player_name === this.players[i].name){
                let player_currentScore = this.players[i].fooScore;

                if(player_currentScore.length === 4){
                    player_currentScore.push(`${this.players[i].name} wins`);
                }
                
                if(player_currentScore.length === 3){
                    player_currentScore.push(40);
                }

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
