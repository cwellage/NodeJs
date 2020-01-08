const emmitter = require('events');

class Loggger extends emmitter {

    log(message) {
        console.log(message);
        this.emit("message1", { a: 4, b: 5 });
    };
    
}

module.exports = Loggger;