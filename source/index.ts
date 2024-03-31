import inquirer from "inquirer";
// Start of Application
Application()



//Operation of Full Application 
async function Application() {
    const answers = await inquirer.prompt([
        
        {
            type: "input",
            name: "inputCash",
            message: "Select Your Currency",
        },
        {
            type: "list",
            name: "inputCurrency",
            message: "Select Your Currency",
            choices: [
                "PKR",
                "INR",
                "USD",
                "PND",
                "EUR",
            ]
        },
        {
            type: "list",
            name: "inputCurrency",
            message: "Select Your Currency",
            choices: [
                "PKR",
                "INR",
                "USD",
                "PND",
                "EUR",
            ]
        }
        

    ])

}