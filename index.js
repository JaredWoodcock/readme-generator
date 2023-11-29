// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Instructions on how to install your project on their local machines:",
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how users can use your project:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide guidelines on how people who want to contribute to your project can do so:",
    },
    {
        type: "input",
        name: "tests",
        message: "Detail any test suites, frameworks, or methodologies you have used to test your project:",
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log(`README generated successfully!`)
    );
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((data) => {
      const fileName = `${data.title.replace(/\s+/g, '-').toLowerCase()}-README.md`;
      writeToFile(fileName, data);
    });
  }

// Function call to initialize app
init();
