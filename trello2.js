var stdin = process.openStdin();
var trelloNode = require('trello-node-api')(apiKey,oauth);


console.log(String.raw`
 _______                 _   _                  _____   _        _____ 
|__   __|               | | | |                / ____| | |      |_   _|
   | |     _ __    ___  | | | |   ___         | |      | |        | |  
   | |    | '__|  / _ \ | | | |  / _ \        | |      | |        | |  
   | |    | |    |  __/ | | | | | (_) |       | |____  | |____   _| |_ 
   |_|    |_|     \___| |_| |_|  \___/         \_____| |______| |_____|
                                                                                                                                            
`);


stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + 
        d.toString().trim() + "]");
  });