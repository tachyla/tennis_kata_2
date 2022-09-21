module.exports = class Game {
    constructor(){
        this.players = [];
        this.currentScore = {};
    }

    addPlayer = (playerName) => {
        if(this.players.length === 2){
            let three_player_error = 'Error: cannot add a third player';
            return  three_player_error;
        }
        else{
            this.players.push({player: playerName});
        }
    }

    getScore = () => {
        let scoreResponse = 'love all';
        return scoreResponse;
    }
}
