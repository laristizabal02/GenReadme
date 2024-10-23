// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('estoy en renderlincense badge');
  if (!license || license === 'None') return '';

  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'APACHE 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3') {
    return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';

  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'APACHE 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3') {
    return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';

  return `
## License:
${license}

${renderLicenseLink(license)}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('estoy en generate markdown');
  return `# ${data.title}


${renderLicenseBadge(data.license)}

## Description:

${data.description}

## Motivation:
${data.motivation}

## Build:
${data.build}

## Solve:
${data.solve}

## Learn:
${data.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing) 
- [Test](#tests)
- [Questions](#questions)

## Installation
first thing, you will have to run the command: npm install
then, write the line: npm install -y
then we need the package inquired, so we are going to install it with the following line: npm install inquired
then you will run the command npm index.js to start the app
this is going to ask you some questions, you will have to answer to get the correct README
that will be all.

## Usage
You will have to complete all questions the app is asking you:
- Name
- Github user
- Email
- Title
- License
- Description

${renderLicenseSection(data.license)}

## Contributing:
- Packages: Inquired, Package.json, Package-lock.json
- Made by: ${data.name}
- GitHub: https://github.com/${data.github}/readme
- Email: ${data.email}

## Test:
You can test this ReadME with every kind of App you want to create.
Check this video for help:
https://www.loom.com/share/04e29889e001445a8e1fb65ce13c1c49

## Questions:
- Is this a generic README? Yes! but you can change it as many times as you want!
- Can I use it for any app I create? Of course!

`;
}

export default generateMarkdown;
