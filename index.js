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
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role"
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
    .then(function(role){
        let roleDetails = "";
        if (role === "Manager") {
            roleDetails = "Office Number";
        } 
        else if (role === "Engineer") {
            roleDetails = "Github";
        } 
        else {
            roleDetails = "school"
        }
        inquirer.prompt([{
                message: `Please enter Employee's ${roleDetails}`,
                name: "Role details"
            },
            {
                message: "Do you want to add an additional employee?",
                type: "list",
                name: "addEmployee",
                choices: [
                    "yes",
                    "no"
                ]
            }
        ])
    })
}

createEmployee();

