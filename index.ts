#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo: string[] = [];
let condition = true;
console.log(chalk.blueBright.bold("\n \t Welcome to todo-list by muheeb \n"));

let main = async () => {
  while (condition) {
    let option = await inquirer.prompt([
      {
        name: "choices",
        type: "list",
        message: "select an option you want to do",
        choices: [
          "add task",
          "delete task",
          "update task",
          "view todo-list",
          "exit",
        ],
      },
    ]);
    if (option.choices === "add task") {
      await addtask();
    } else if (option.choices === "delete task") {
      await deletetask();
    } else if (option.choices === "update task") {
      await updatetask();
    } else if (option.choices === "view todo-list") {
      await viewtask();
    } else if (option.choices === "exit") {
      condition = false;
    }
  }
};

//funtion to add new task to todos
let addtask = async () => {
  let newtask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "enter your new task",
    },
  ]);
  todo.push(newtask.task);
  console.log(`\n ${newtask.task} task added successfull to todo-list`);
};

//function to view all task in todos
let viewtask = () => {
  console.log(`\n your todo list : \n`);
  todo.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
};

//function to delete a task from todo list
let deletetask = async () => {
  await viewtask();
  let taskindex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "enter the index.no of the tast to delete :",
    },
  ]);
  let deletedtask = todo.splice(taskindex.index - 1, 1);
  console.log(
    `\n ${deletedtask} this task has been deleted successfully from your todo list`
  );
};

//function to update a task
let updatetask = async () => {
  await viewtask();
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "enter the index no. of the task you want to update",
    },
    {
      name: "newtask",
      type: "input",
      message: "enter new task ",
    },
  ]);
  todo[update_task_index.index - 1] = update_task_index.newtask;
  console.log(
    `\n task at index no. ${update_task_index.index - 1
    } updated successfully[for updated list check option "view todo-list"]`
  );
};
main();
