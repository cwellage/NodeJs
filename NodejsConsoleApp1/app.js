
//const Logger = require('./logger');
//var logger = new Logger();

//logger.on("message1", function (arg) {
//    console.log(arg);
//    console.log(arg[0]);
//});

//logger.log("chatura");

const Logger = require('./logger');
var logger = new Logger();

logger.on("message1", function (arg) {
    console.log(arg);
    console.log(arg[0]);
});

logger.log("chatura");


