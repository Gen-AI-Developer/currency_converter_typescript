import inquirer from "inquirer";
// Start of Application
//Operation of Full Application
async function Application() {
    const answers = await inquirer.prompt([

        {
            type: "input",
            name: "inputCash",
            message: "Enter your amount/cash - ",
        },
        {
            type: "list",
            name: "inputCurrency",
            message: "Select Your Currency",
            choices: [
                "PKR",
                "USD",
            ]
        },
        {
            type: "list",
            name: "outputCurrency",
            message: "Select Your Currency",
            choices: [
                "PKR",
                "USD",
            ]
        }


    ])
    if (answers.inputCash.toLocaleLowerCase() === answers.outputCurrency.toLocaleLowerCase()) {
        console.log('Conversation in same currency is not logical')
        Application()
    }
    else {
        CurrencyConveter(answers.inputCurrency, answers.outputCurrency, answers.inputCash)
        const restart = await inquirer.prompt([
            {
                type: "input",
                message: "You want to convert More ! Yes/NO ",
                name: "check"
            }
        ])
        if (restart.check.toLocaleLowerCase() === 'yes') {
            Application()
        }
        else {
            console.log('Thanks For Using Our Program Stay Happy and Blessed')
        }
    }

}
async function CurrencyConveter(input: string, output: string, cash: number) {
    if (input === "USD" && output === "PKR") {
        console.log(`* Fresh Rate Accourding to Open Market - 1 USD = 280 PKR`)
        console.log(` You have ${cash} $ USD which equal to ${Number(cash * 280)} PKR`)
    }
    else if (input === "PKR" && output === "USD") {
        console.log(`* Fresh Rate Accourding to Open Market - 1 USD = 280 PKR`)
        console.log(` You have ${cash} PKR which equal to ${Number(cash / 280)} USD`)
    }

}

Application()