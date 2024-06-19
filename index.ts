import inquirer from "inquirer"
import chalk from "chalk"


console.log(
  chalk.bgGreenBright.bold(
    "\n \t Welcome to `Code with Areesha` - `Currency converter` \n "
  )
);

// define the list of currencies and their exchange rates.....

let exchange_rate: any={ 
    "USD":1, //(base currency)
    "EUR":0.9, //(european currency (EURO))
    "JYP": 113, //(japnese currency (yan))
    "CAD": 1.3, //(canadian currency (dollar))
    "AUD": 1.65,  //(australian currency (dollar))
    "PKR": 280   // (pakistan currency (rupees))
     // ADD more currency whatever you want
}
//  prompt the user to select the currencies to convert from and to.....
let user_answer = await inquirer.prompt([{
        name:"from_currency",
        type:"list",
        message:"Select the currency to convert from:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
},
{
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
},
{
    name:"amount",
    type:"input",
    message:"Enter the amount to convert:"
}
        
]);

// perfoorm currency conversion by using formula.....
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount



// Formula of conversion...
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;


// Display the converted amount 

console.log(`Converted amount = ${converted_amount.toFixed(3)}`);