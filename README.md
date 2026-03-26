# Canvas Runner 🏃‍♂️

Canvas Runner is a faux-3D endless runner game built using vanilla HTML, CSS, and JavaScript. Navigate your player through three lanes, dodge incoming obstacles, collect rotating coins to boost your score, and beat your own high score!

## 🎮 Gameplay Features

* **Faux-3D Perspective:** Uses CSS `rotateX` and 3D transforms to create an immersive, pseudo-3D game board.
* **Three-Lane System:** Move freely between three distinct lanes to avoid obstacles.
* **Jump Mechanics:** Jump over elements using the Z-axis.
* **Dynamic Obstacles & Coins:** Obstacles and coins spawn continuously at random lane intervals.
* **Score Tracking:** Points increase automatically as you survive, with a +25 point bonus for collecting coins.
* **High Score Memory:** Your highest score is saved locally to your browser using `localStorage`.

## ⌨️ Controls

* **Left Arrow (`←`)**: Move one lane to the left.
* **Right Arrow (`→`)**: Move one lane to the right.
* **Up Arrow (`↑`)**: Jump.

## 🚀 How to Run

1. Clone or download the repository to your local machine.
2. Ensure all files (`index.html`, `logic.js`, `style.css`, `bg2.jpg`, `icon.ico`) are in the same folder.
3. Simply double-click on `index.html` to open it in your default web browser. 
4. Click anywhere on the page and start using your arrow keys to play!

## 📁 File Structure

* `index.html`: The main structural file containing the game board, player, and score trackers.
* `logic.js`: The active game logic engine controlling movement, spawning, collision detection, and score updates.
* `style.css`: The styling file responsible for the 3D perspective, animations (like the rotating coin), and visual aesthetics.
* `game.js`: An older/legacy version of the game logic (currently not linked in the HTML).
* `bg2.jpg`: The background image for the game body.
* `icon.ico`: The favicon for the web page.

## 🛠️ Technologies Used

* **HTML5**
* **CSS3** (Animations, Transitions, and 3D Transforms)
* **JavaScript (ES6+)** (DOM Manipulation, Intervals/Timeouts, Local Storage)

---
*Have fun trying to beat your high score!*
