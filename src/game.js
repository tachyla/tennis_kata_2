module.exports = class Game {
    constructor(){
        this.players = [];
        this.currentScore = {};
    }

    addPlayer = (playerName) => {
        if(this.players.length <= 2){
            this.players.push({player: playerName});
        }
        else{
            throw new Error('Error: A third player cannot be added');
        }
    }

    getScore = () => {
        let scoreResponse = 'love all';
        return scoreResponse;
    }

    advancePlayer(playerString){
        let player = this.players[0];
 

    };
}
