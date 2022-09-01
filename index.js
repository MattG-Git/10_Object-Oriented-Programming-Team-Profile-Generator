//requiring dependencies
const inquirer = require('inquirer');
const fs = require('fs');
//importing the classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//this is an array of questions for managers, engineers and interns with validation
const questions = {
    manager: [ {
        name: 'mName',
        type: 'input',
        message: 'What is the name of the manager?',
        validate: (value) => {
            if (value) {
                return true
            }else {
                return 'That is an invalid response, please enter the name of the manager.'
            }
        }
    },
    {
        name: 'mId',
        type: 'input',
        message: 'What is the manager\'s id?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the manager\'s id'
            }
        }
    },
    {
        name: 'mEmail',
        type: 'input',
        message: 'what is the manager\'s email?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the manager\'s email'
            }
        }
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the manager\'s office number? ',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the manager\'s office number'
            }
        }
    },
],
engineer: [
    {
        name:'eName',
        type: 'input',
        message: 'What is the name of the engineer?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the name of the engineer'
            }
        }
    },
    {
        name: 'eId',
        type: 'input',
        message: 'What is the engineer\'s id?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the engineer\'s id'
            }
        }
    },
    {
        name: 'eEmail',
        type: 'input',
        message: 'what is the engineer\'s email?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the engineer\'s email'
            }
        }
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is the engineer\'s Github username? ',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the engineer\'s Github username'
            }
        }
    },
],
intern: [
    {
        name: 'iName',
        type: 'input',
        message: 'What is the name of the intern?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the name of the intern'
            }
        }
    },
    {
        name: 'iId',
        type: 'input',
        message: 'What is the intern\'s id?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the intern\'s id'
            }
        }
    },
    {
        name: 'iEmail',
        type: 'input',
        message: 'what is the intern\'s email?',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the intern\'s email'
            }
        }
    },
    {
        name: 'school',
        type: 'input',
        message: 'Where does the intern go to school? ',
        validate: (value) => {
            if (value) {
                return true
            }else{
                return 'That is an invalid response, please enter the name of the intern\'s school'
            }
        }
    },
],
newEmployee: [
    {
        name: 'newEmployee',
        type: 'list',
        message: 'would you like to add a new employee?',
        choices: ('New Engineer', 'New Intern', 'Finish Building Team')
    }
]
};

//this code begins the app and asks for the manager information
function init() {
    inquirer.prompt(questions.manager).then(response => {
        const manager = new Manager(response.mName, response.mId, response.mEmail, response.officeNumber);
        addTeamMember(manager, [], []);
    });
}

//this code builds the team by adding new engineers and new interns to addTeamMember
function addTeamMember(manager, engineers, interns) {
    inquirer.prompt(questions.newEmployee).then(response => {
        if (response.newEmployee === 'New Engineer') {
            inquirer.prompt(questions.engineer).then(response => {
                const engineer = new Engineer(response.eName, response.eId, response.eEmail, response.github);
                engineers.push(engineer);
                addTeamMember(manager, engineers, interns);
            })
        } else if(response.newEmployee === 'New Intern') {
            inquirer.prompt(questions.intern).then(response => {
                const intern = new Intern(response.iName, response.iId, response.iEmail, response.school);
                interns.push(intern);
                addTeamMember(manager, engineers, interns);
            })
        } else {
            //this is where I will call generate html functions for manager, engineer & intern
        }
    })
}
//this will initialize our init function to begin the app
init();