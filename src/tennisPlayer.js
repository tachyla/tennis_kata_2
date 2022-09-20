module.exports = class TennisPlayer {
    constructor(name = this.isRequired()){
        this.name = name;
        this.score = [];
    }
    
    getScore(playerName){
        if(playerName === this.name){
            return this.score;
        }
    }

    isRequired(name){
        throw new Error(`Tennis Player requires a name`);
    }
}


