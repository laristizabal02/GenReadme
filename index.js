// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

 const questions = () => {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Who is making this project?: ',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Github Username: ',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Email Address: ',
          },
          {
            type: 'input',
            name: 'title',
            message: 'Project Name: ',
          },
          {
            type: 'list',
            message: 'What is the license ?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
          },
          {
            type: 'input',
            name: 'description',
            message: 'Short Description: ',
          },
          {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?: ',
          },
          {
            type: 'input',
            name: 'build',
            message: 'Why did you build this project?: ',
          },
          {
            type: 'input',
            name: 'solve',
            message: 'What problem does it solve?:  ',
          },
          {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?:  ',
          },
          
        
          
          
        ]);
      };



// TODO: Create a function to write README file

function writeFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  questions()
  .then((answers) => {
    console.log(answers);
    return writeFile('README.md', answers); // Return the promise from writeFile
  })
  .then(() => {
    console.log('Successfully wrote to README.md');
  })

}
// Use writeFile method imported from fs.promises to use promises instead of
// a callback function
// Function call to initialize app
init();


