const fs = require('fs');
const { generateHTML } = require('./lib/generateHTML')
const inquirer = require('inquirer');
const { choices } = require('yargs');


let employees = []
console.log('Use this to build a team profile')

async function startQuestion() {
    const employee = await inquirer.prompt([

    {
        type: 'input',
        name: 'employee',
        message: 'Please enter employee name.',
        validate: employeeInput => {
            if (employeeInput) {
            return true;
        } else {
            console.log('Please enter a valid employee name');
            return false;
        }
    }
},
{
    type: 'list',
    name:'role',
    message: 'What is your role at our company?',
    choices: ['Manger', 'Engineer', 'Intern']
},
{
    type:'input',
    name: 'email',
    message: 'Enter an employee email address.',
    validate: email => {
        if (email) {
            return true;
        } else {
            console.log('Please enter a valid employee email address.')
            return false;
        }
    }
}
    ])


}