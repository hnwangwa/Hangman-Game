// Load the NPM Package inquirer
var inquirer = require("inquirer");

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What's your Name?",
      name: "username"
    }, 
    {
    type: 'list',
    name: 'hogwarts house',
    message: 'Which House Do You Belong In?',
    choices: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
    }, {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }, {
      type: "password",
      message: "Please choose a password",
      name: "password",
      mask: '*',
    }])
  .then(function(answers) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    console.log(JSON.stringify(answers, null, '  '));
   });
 