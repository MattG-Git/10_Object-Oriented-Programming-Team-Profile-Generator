const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What would you like your poject to be titled?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Describe your project'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What command will install your dependencies?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How is this application used?'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'How can someone contribute?'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Using commands, how do you test your application?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Which license would you like your project to have?',
        choices: ['Apache 2.0','MIT', 'MPL 2.0', 'IPL 1.0']
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?'
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README generated successfully!')
    );
}


function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();