import inquirer from "inquirer";
// Start of Application
Application()



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
                "PND",
                "EUR",
            ]
        },
        {
            type: "list",
            name: "outputCurrency",
            message: "Select Your Currency",
            choices: [
                "PKR",
                "USD",
                "PND",
                "EUR",
            ]
        }


    ])
    if (answers.inputCash === answers.outputCurrency) {
        console.log('Conversation in same currency is not logical')
        Application()
    }
    else {
        CurrencyConveter(answers.inputCurrency, answers.outputCurrency, answers.inputCash)
    }
}
async function CurrencyConveter(input: string, output: string, cash: number) {
    if (input === "PKR" && output === "USD") {

    }
    else if (input === "PKR" && output === "PND") {

    }
    else if (input === "PKR" && output === "EUR") {

    }

}