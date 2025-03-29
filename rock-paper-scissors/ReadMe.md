# Let's Play Rock, Paper, Scissors
This game is a simple rock, paper, scissors. Click the symbol for what you want to play and try your luck against the computer! Instructions on how to play and a demo are below.

## Tech Stack
* **Front-end:**
    React
* **Back-end:**
    CORS/Express
* **Database:**
    PostgreSQL

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Cloning](#how-to-clone)
3. [Installation Instructions](#installation)
4. [Game Instructions](#game-play-instructions)
5. [Demo](#demo)

## Prerequisites
Please have these installed to run this project
- [x] Postgresql
- [x] Npm
- VS Code Editor _(recommended but optional)_

## How to Clone
_Please open the <INS>rock-paper-scissors</INS> folder in your terminal_

1. Clone my project using this link:  https://github.com/courjimen/techtonica-assignments.git

Go to the project directory

```bash
cd rock-paper-scissors
```

Open in VS Code
```bash
code .
```

## Installation
1. Open my project in your code editor (I use VS code) and do the following commands:

- Client folder
```bash
cd client
npm install react-icons
```

- Server folder
```bash
cd server
npm install express cors nodemon pg
```
- Root directory
```bash
npm install concurrently --save-dev
```
2. Installing data from db.sql
- Open postgres on your terminal 

```bash
psql postgres
```
- Copy paste the contents from the db.sql file to create your tables

## Game Play Instructions

* **Player Input:**
    * Players enter their name to start the game and choose "Rock," "Paper," or "Scissors" using buttons.
* **Computer Opponent:**
    * The computer randomly selects "Rock," "Paper," or "Scissors" each round.
* **Round Logic:**
    * The game determines the winner of each round based on the classic Rock Paper Scissors rules.
    * Player and computer scores are tracked.
* **Game Length:**
    * The game consists of 10 rounds.
* **Game Over:**
    * After 10 rounds, the game ends.
    * The overall winner is displayed.
    * The players score is sent to a leaderboard.
* **Leaderboard:**
    * The game displays a leaderboard showing player names and scores.
    * Players can search the leaderboard by player name.

## Demo
Here is what you can expect to see:
Home page:

Game page:

Winner Scoreboard:
