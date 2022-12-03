#!user/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { setTimeout } from "timers/promises";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Calculat');
    await sleep();
    rainbowTitle.stop();
    console.log(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    let rainbowTitle1 = chalkAnimation.rainbow('Lets Calculat line 31');
}
welcome();
async function askQuestion() {
    const answers= await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "opration",
            message: "Which opration you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Divsion"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2"
        }
    ]);

        if (answers.operator == "Addition") {
            console.log(`${answers.num1} +${answers.num2} = ${answers.num1 + answers.num1}`);
        }
        else if(answers.operator == "Subtraction"){
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num1}`);
        }
        else if(answers.operator == "Multiplication"){
            console.log(`${answers.num1} *${answers.num2} = ${answers.num1 * answers.num1}`);
        }
        else if(answers.operator == "Subtraction"){
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num1}`);
        }
    
};
askQuestion();


async function startagain(){
    do{
        await askQuestion();
        var again =await inquirer
        .prompt(
            {
                type:"input",
                name:"restart",
                message:"Do you want to restart? Pree y or n:"
            }
        )
    }while(again.restart=='y'|| again.restart=='Y')
}

startagain();