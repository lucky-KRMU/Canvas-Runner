// This is the new logic.js file. This file will be used to redesign the game mechanics

// Necessary Objects (variables)
let body = document.querySelector("body")
let board = document.querySelector("#container");
let player = document.querySelector("#player");
let scoreTag = document.getElementById("score");
let highScore = document.querySelector("#highScore");

// Obstacle Variables (data structure)
let obstacleArray = [];
let obstaclePositionArray = [];

// auxiliary variables
let score = 0;
let lane = 1;
let laneLeft = 15;
let jumpTime = 400;
let spawnTime = 300;
let moveTime = 200;
let gameOver = false;

// Setting the initial High score value
highScore.innerHTML = `High Score:${JSON.parse(localStorage.getItem("score")) || 0}`

// Defining the Initial position of the player to let js read and compare it's values
player.style.top = "80%";
player.style.left = "15%";

// Player Mechanics
body.addEventListener('keydown', (e)=>{
    
    // Changing the Lane
    if (e.key === "ArrowRight" && lane < 3){
        // Changing/Updating the lane, left of the player and it's position
        lane += 1;
        laneLeft += 30;
        player.style.left = `${laneLeft}%`;
    } else if (e.key === "ArrowLeft" && lane > 1){
        // Changing/Updating the lane, left of the player and it's position
        lane -= 1;
        laneLeft -= 30;
        player.style.left = `${laneLeft}%`;
    }

    if (e.key === "ArrowUp"){
        // Making the player jump 
        player.style.transform = "translateZ(10vh)";
        
        // Making the player return to it's original position
        setTimeout(()=>{
            player.style.transform = "";
        }, jumpTime)
    }
})

// Adding Obstacles
function makeObstacles() {

    let lane = Math.ceil(Math.random() * 3);

    let obstacle = document.createElement("div");
    obstacle.className = "obstacle";

    obstacle.style.top = "10%";

    if (lane == 1){
        obstacle.style.left = "15%";
    } else if ( lane == 2){
        obstacle.style.left = "45%";
    } else {
        obstacle.style.left = "75%";
    }

    board.appendChild(obstacle);
    obstacleArray.push(obstacle);
    obstaclePositionArray.push(10);
}

// Moving the obstacle
function moveObstacles() {
    obstacleArray.forEach( (obstacle, index) =>{
        obstaclePositionArray[index] += 10;
        let position = obstaclePositionArray[index]
        obstacle.style.top = `${position}%`
    })
}

// Removing the obstacles After leaving the board
function removeObstacles() {
    obstacleArray.forEach((obstacle, index)=>{
        if (obstacle.style.top === "90%") {
            board.removeChild(obstacle);
            obstacleArray.splice(index, 1);
            obstaclePositionArray.splice(index, 1);
        }
    })
}

// Function to detect collisions
function detectCollision() {
    obstacleArray.forEach(obstacle=>{
        // Method 1
        // let obsX = Math.round(obstacle.getBoundingClientRect().left);
        // let obsY = Math.round(obstacle.getBoundingClientRect().top);

        // let playerX = Math.round(player.getBoundingClientRect().left);
        // let playerY = Math.round(player.getBoundingClientRect().top);

        // if(obsX == playerX || obsY >= playerY){
        //     console.log("collision!");
        // }

        // Method 2
        let obsX = obstacle.style.left;
        let obsY = obstacle.style.top;
        let obsZ = obstacle.style.transform || "";

        let playerX = player.style.left;
        let playerY = player.style.top;
        let playerZ = player.style.transform;

        if (obsX == playerX && obsY >= playerY && obsZ == playerZ){
            gameOver = true;
            alert(`Game Over! \n:-(\nScore:${score}`);
            window.location.reload();

            // updating the high score
            let highScore = JSON.parse(localStorage.getItem("score")) || "";
            if (highScore < score){
                localStorage.setItem("score", JSON.stringify(score))
            }
        }

        
        // The problem with the collision was that we were using Method 2, It used CSS properties for collision. But JS didn't read the CSS properties from CSS file initially. hence we gave that manually in JS. Now it's working
    })
}

// To update the score
function updateScore() {
    scoreTag.innerText = `Score: ${score}`
}

// Game Loop
// Loop to make the obstacles
// setInterval(()=>{
//     // Adding obstacles
//     makeObstacles();
// }, spawnTime)

// // loop to do operations/mechanics of the obstacles
// setInterval(()=>{

//     // Moving obstacles
//     moveObstacles();

//     // Removing obstacles after leaving the board
//     removeObstacles();

//     // Detecting Collisions
//     detectCollision();

//     //updating the score
//     score += 1;
//     updateScore();

// }, moveTime);