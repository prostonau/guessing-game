class GuessingGame {
    constructor() {
        this.min = 0
        this.max = 0        
        this.number = 0
    }

    setRange(min, max) {
        this.min = min
        this.max = max        
    }

    guess() {
        this.number = Math.round((this.max + this.min) / 2);
        //console.log('min = ' + this.min + ' max  = ' +this.max + '  guess = ' + this.number )
        return this.number //409 //this.guess


    }

    lower() {
      //console.log("lower")
      this.max = this.number
        
    }

    greater() {
        //console.log("greater")
        this.min = this.number
    }
}

module.exports = GuessingGame;
