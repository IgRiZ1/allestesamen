import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


let num = 0 ; 
for(let som = 1 ; som < 4; som++){
    num = 0 ;
    for(let i = 0 ; i < 4 ; i++ ){
       num += som
          process.stdout.write(`${num}  `) ;
    }
    console.log()
}

process.exit()