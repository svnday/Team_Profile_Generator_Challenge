const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employees = [];

function app() {
    firstHTML();
    createEmployee();
};

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
    .then(function({ name, role, id, email }){
        let roleDetails = "";
        if (role === "Manager") {
            roleDetails = "Office Number";
        } 
        else if (role === "Engineer") {
            roleDetails = "Github";
        } 
        else {
            roleDetails = "School";
        }
        inquirer.prompt([{
                message: `Please enter employee's ${roleDetails}:`,
                name: "roleDetails"
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
        .then(function({ roleDetails, addEmployee }) {
            let newEmployee = '';
            if (role === 'Manager') {
                newEmployee = new Manager(name, id, email, roleDetails);
            } else if (role === 'Engineer') {
                newEmployee = new Engineer(name, id, email, roleDetails);
            } else {
                newEmployee = new Intern(name, id, email, roleDetails);
            }
            employees.push(newEmployee);
            addCard(newEmployee)
            .then(function() {
                if (addEmployee === 'yes') {
                    createEmployee();
                } else {
                    endHTML();
                }
            });
        });
    });
};

function firstHTML() {
    const code = `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a6614c4a77.js" crossorigin="anonymous"></script>
    <title>Our Team Profile</title>
</head>
<body>
    <header class="bg-danger py-5">
        <h1 class="fs-1 text-white text-center">My Team</h1>
    </header>


    <div class="d-flex container justify-content-center">
        <div class="d-flex card-deck col-9 flex-wrap justify-content-center align-self-center">
    `;
    fs.writeFile('./dist/team_profile.html', code, function(err) {
        if (err) {
            console.log(err);
        }
    });
}



function addCard(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let code = '';

        if (role === 'Manager') {
            const officeNumber = employee.getOfficeNumber();
            code = 
            `
            <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                <div class="card-header bg-primary text-white">
                    <p>${name}</p>
                    <p><i class="fas fa-mug-hot"></i> Manager</p>
                </div>
                <div>
                    <ul class="list-group col">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
            `;
        } else if (role === 'Engineer') {
            const github = employee.getGithub();
            code = 
            `
            <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                <div class="card-header bg-primary text-white">
                    <p>${name}</p>
                    <p><i class="fas fa-glasses"></i> Engineer</p>
                </div>
                <div>
                    <ul class="list-group col">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Github: ${github}</li>
                    </ul>
                </div>
            </div>
            `;
        } else {
            const school = employee.getSchool();
            code =
            `
            <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                <div class="card-header bg-primary text-white">
                    <p>${name}</p>
                    <p><i class="fas fa-user-graduate"></i> Intern</p>
                </div>
                <div>
                    <ul class="list-group col">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
            `
        }
        console.log('New employee added!');
        fs.appendFile('./dist/team_profile.html', code, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function endHTML() {
    const code = `
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
    `;

    fs.appendFile('./dist/team_profile.html', code, function(err){
        if (err) {
            console.log(err);
        };
    });
    console.log('Your team profile has been created!')
};

app();
