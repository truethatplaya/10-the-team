const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
// const createHTML = require("createHTML");

function validateInput(input) {
  if (input == "") {
    return "Input needed to continue";
  } else {
    return true;
  }
}

let teamMember = [];

function createEmployee() {
  let employeePrompts = [
    {
      type: "input",
      name: "name",
      message: "Type the Manager's Name",
      validate: validateInput,
    },
    {
      type: "input",
      name: "id",
      message: "Type the ID",
      validate: "validateInput",
    },
    {
      type: "input",
      name: "email",
      message: "Type Email",
      validate: "validateInput",
    },
  ];

  inquirer.prompt(createEmployee).then((answers) => {
    const newEmployee = new Employee(answer.name, answer.id, answer.email);
    teamMember.push(newEmployee);

    creatTeamMember();
  });
}
