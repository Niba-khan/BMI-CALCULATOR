#! /usr/bin/env/node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold.underline("\n \tWelcome to BMI Calculator \n"));
let bmiCalculator = await inquirer.prompt([{
        name: "weightInKg",
        type: "number",
        message: chalk.yellow.italic("Enter your weight in kg")
    },
    {
        name: "heightInMeters",
        type: "number",
        message: chalk.red.italic("Enter your height in meter")
    }
]);
let bmi = bmiCalculator.weightInKg / (bmiCalculator.heightInMeters * bmiCalculator.heightInMeters);
console.log(chalk.green.bold(`Niba your BMI is ${bmi}`));
