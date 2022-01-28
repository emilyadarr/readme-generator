// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//const { reject } = require('lodash');
//const { resolve } = require('path/posix');
// const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License']
    },
    {
      type: 'input',
      name: 'install',
      message: 'What command should be run to install dependencies?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using this repo?'
    }
  ])
  .then(inputData => {
    console.log(inputData);
  });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
  
      resolve({
        ok: true,
        message: 'README.md created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
questions()
// .then(inputData => {
//   return generateMarkdown(inputData);
// })
// .then(pageREADME => {
//   return writeFile(pageREADME);
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse);
// })
// .catch(err => {
//   console.log(err);
// })
