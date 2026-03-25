// This is the new logic.js file. This file will be used to redesign the game mechanics

// Necessary Objects (variables)
let body = document.querySelector("body")
let board = document.querySelector("#container");
let player = document.querySelector("#player");

let lane = 1;
let laneLeft = 15;

let jumpTime = 200;

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