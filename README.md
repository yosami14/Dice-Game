# Dice Game

This is a simple web-based dice game implemented using HTML, CSS, and JavaScript. The game displays two dice images for two players and allows them to roll the dice by clicking the "Roll Again" button. The outcome of the game is determined by comparing the randomly generated numbers for each player.

## How to Play

1. Open the `index.html` file in a web browser.
2. The page will display two dice images for Player 1 and Player 2.
3. Click the "Roll Again" button to generate random numbers for each player and update the dice images.
4. The winner of the game will be indicated by the header text:
   - If Player 1's number is greater than Player 2's number, Player 1 wins.
   - If Player 1's number is less than Player 2's number, Player 2 wins.
   - If both players have the same number, it's a draw.

## Technologies Used

- HTML
- CSS (Bootstrap v5.2.1)
- JavaScript

## File Structure

- `index.html`: The main HTML file that defines the structure of the web page.
- `style.css`: The CSS file that contains styles for the game elements.
- `index.js`: The JavaScript file that handles the dice rolling logic and updates the game outcome.

## External Dependencies

- Bootstrap CSS v5.2.1: Used for styling the page.
- Font Awesome kit: Used for displaying icons.
- Bootstrap JavaScript Libraries: Required for the functionality of Bootstrap components.

## How to Customize

- You can modify the dice images by replacing the existing image files located in the "Player 1(BW)" and "Player 2(RW)" folders.
- The game outcome styles can be customized by modifying the CSS rules in the `<style>` tag or in the `style.css` file.

Note: Make sure to keep the file structure and dependencies intact for the code to work properly.