module.exports = class TennisPlayer {
    constructor(name){
        if(!name){
            throw new Error('Tennis Player requires a name');
        }

        this.name = name;
        this.score = [];
    }
    
    getScore(playerName){
        if(playerName === this.name){
            return this.score;
        }
    }
}


