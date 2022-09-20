module.exports = class TennisPlayer {
    constructor(name){
        
        if(!name || name.length <= 1){
            throw new Error("Tennis Player requires a name at least 2 characters");
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


