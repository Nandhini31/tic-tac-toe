## Tic-tac-toe
 Tic-tac-toe is game for two players(also known as noughts and crosses, 'X' and 'O'). The player who claims a row, a column or a diagonal first gets to win  the game

## My Approach
I broke down the responsibility Game, Grid and player. The player class in responsible for a player and its property symbol

Game class is responsible for initiating a new Grid, player's move and with every move it checks if the player has won.

Grid is a predefined 2 x 2 array. It starts from the top left corner as 0,0

Grid is responsible for the state of the game grid at any point. It is also responsible to check if a player has claimed a row, column or diagonal. It is also responsible to allow a player to claim a field or not if it is already taken

## Tech Stack
 * JavaScript
 * Jasmine
