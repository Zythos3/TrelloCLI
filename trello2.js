var stdin = process.openStdin();
var apiKey,
    token;
apiKey =""; //apikey is needed to run
token ="";  //token is needed to run
var Trello = require("node-trello");
var trello = new Trello(apiKey,token);
'use strict';
const util = require('util');
var myArgs = process.argv.slice(2);
var request = require("request")
var readline = require('readline-sync');

   switch (myArgs[0]){
       case 'getlist':
        var board = readline.question("Enter Board ID: ");
       var options = {method: 'GET',
    
       url: 'https://trello.com/1/boards/'+board+'/lists',
       qs:{
           name: namet,
           desc: descr,
           pos: postt,
           keepFromSource: 'all',
           //constant
           key: apiKey,
           token: token
       }};

       request(options,function(error,response,body){
        if(error) throw new Error(error);

        console.log(body);
        process.exit();

    });
       break;
       case 'add':
        console.log("Name Card: ");
        var namet = readline.question("Enter Name: ");
        var descr = readline.question("Enter Description: ");
        var postt = readline.question("Enter Position (Top,Bottom): ");
        var idlistt = readline.question('Enter enter list ID: ');
        var options = {method: 'POST',
    
            url: 'https://api.trello.com/1/cards',
            qs:{
                name: namet,
                desc: descr,
                pos: postt,
                //changes with list
                idList: idlistt,
                keepFromSource: 'all',
                //constant
                key: apiKey,
                token: token
            }};        
               request(options,function(error,response,body){
                    if(error) throw new Error(error);

                    console.log(body);
                });

        break;
        
        case 'search':


        break;

        case 'list':

        break;
       default:
       console.log(String.raw`
 _______                 _   _                  _____   _        _____ 
|__   __|               | | | |                / ____| | |      |_   _|
   | |     _ __    ___  | | | |   ___         | |      | |        | |  
   | |    | '__|  / _ \ | | | |  / _ \        | |      | |        | |  
   | |    | |    |  __/ | | | | | (_) |       | |____  | |____   _| |_ 
   |_|    |_|     \___| |_| |_|  \___/         \_____| |______| |_____|
                                                                                                                                            
`);
        console.log("trello [add] [rm] [sw]");
        console.log("List of commands: ");
        console.log("getlist -- gets the ID for the lists in the board");
        console.log("add --creates a task in a list on a board");
        process.exit();
   }
    
    