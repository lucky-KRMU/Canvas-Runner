console.log("test!")

let player = document.querySelector("#player");
let body = document.querySelector("body");
let board = document.querySelector("#container");

let playerInitialPos = 2;   // To get the initial position of the player and get and update the current value of the player

let obstacleArray = [];

body.addEventListener("keydown", (e) => {
    // ArrowRight, ArrowLeft, ArrowUp, ArrowDown

    //Moving the element sideways
    //Also checking for the valid requested moves via checking initial position
    if (e.key === "ArrowLeft" && playerInitialPos > 1) {

        playerInitialPos -= 1;
        player.style.gridColumn = playerInitialPos;
        console.log(player.style.gridColumn)

    } else if (e.key === "ArrowRight" && playerInitialPos < 3) {

        playerInitialPos += 1;
        player.style.gridColumn = playerInitialPos;
        console.log(player.style.gridColumn)

    }

    //Making the element Jump
    if (e.key === "ArrowUp") {
        // console.log("j")
        player.style.transform = "translateZ(10vmin)"; // to make it jump
        
        //To make the element revert back to it's original position
        setTimeout(() => {
            player.style.transform = "";
        }, 200);
    }
})


// Game Loop
setInterval(()=>{

    // Loop to spawn the obstacles
    setTimeout(()=>{
        let obstacle = document.createElement("div");
        obstacle.className = "obstacle";
        obstacleArray.push(obstacle);
        board.appendChild(obstacle)
    }, 1000)
}, 1000)