var stdin = process.openStdin();
var apiKey,
    oauth;
var trelloNode = require('trello-node-api')(apiKey,oauth);
'use strict';
const util = require('util');
var myArgs = process.argv.slice(2);

console.log(String.raw`
 _______                 _   _                  _____   _        _____ 
|__   __|               | | | |                / ____| | |      |_   _|
   | |     _ __    ___  | | | |   ___         | |      | |        | |  
   | |    | '__|  / _ \ | | | |  / _ \        | |      | |        | |  
   | |    | |    |  __/ | | | | | (_) |       | |____  | |____   _| |_ 
   |_|    |_|     \___| |_| |_|  \___/         \_____| |______| |_____|
                                                                                                                                            
`);
    

console.log('',myArgs);

   switch (myArgs[0]){
       case 'add':
        console.log("command add");
        process.exit();
        break;
       default:
       console.log('Enter $Oauth code:'); 
       stdin.addListener("data", function(d) {
           // note:  d is an object, and when converted to a string it will
           // end with a linefeed.  so we (rather crudely) account for that  
           // with toString() and then trim()
           console.log("you entered: [" + 
               d.toString().trim() + "]");
           
         });
           
         stdin.addListener("data", function(t){
             try{
               console.log("is this correct? (yes)");
               if(t=="yes"||"Yes"||"YES"||"y"){
                 //console.log("Ok");
                   t=apiKey;
                   main();
                   
                 //console.log(util.inspect(apiKey, {depth: null}));
             }else{
               console.log("try again")
   
             }
           console.log("Try again");
           }catch(e){
   
           }
       });
   }
    
    