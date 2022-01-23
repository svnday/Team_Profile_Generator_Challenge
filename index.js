const inquirer = require("inquirer");
const fs = require("fs");


const employees = [];

function createEmployee() {
    inquirer
        .prompt([{
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            message: "What is the employee's ID?",
            name: "id"
        },
        {
            message: "What is the employee's email?",
            name: "email"
        }
    ])
}