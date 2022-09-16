module.exports = class TennisPlayer {
    constructor(name){
        this.name = name;
        this.score = [];
    }

    getScore(playerName){
        if(playerName === this.name){
            return this.score;
        }
    }
}