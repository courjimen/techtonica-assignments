# API Project
This project is focused on building a REST API with Node and Express through your backend server. We will be organizing hardcoded data via postman by following CRUD (Create Read Update Delete) operations and utilizing postgreSQL to connect to local databases.

## Table of Contents
1. [Installation Instructions](#installation)

2. [How to Run Project Locally](#run-project-locally)

3. [Demo](#demo)


## Installation
Prior to jumping into my project make sure you have: 

- postgreSQL and Express installed on your local computer
-  node and postman installed in your preferred code editor

My instructions are specified for **MAC users.** 

Here is a step-by-step guide to  you can installing [postgreSQL with homebrew](https://mcengkuru.medium.com/how-to-install-psql-on-your-mac-a-step-by-step-guide-with-troubleshooting-tips-ade65c441abf) from your command line terminal.

The code editor I used for this project was VS Code. 
- Follow these steps to [install Express](https://expressjs.com/en/starter/installing.html) on your VS Code terminal (they also provide documentation to install node.js)

- I used the postman extension in VS Code. Navigate to the extensions tab on the right side of your VS Code Editor and search for Postman
![](postman.png)


✅ **You _MUST have these installed_** in order to run my project.

## Connect to my database in postgreSQL
Use this command in  your MAC terminal

```bash
psql -U guest -d books
```
It should respond with this:

![](postgres.png)

## Run Project Locally
_Please switch to the <INS>API BRANCH</INS> before cloning_

Clone my project

```bash
git clone https://github.com/courjimen/techtonica-assignments.git
```

Go to the project directory

```bash
cd API-Project
```

Open in VS Code
```bash
code .
```
✅ Open the link to see my database of books on localhost:3000/books

```bash
npm run start
```
## Demo
