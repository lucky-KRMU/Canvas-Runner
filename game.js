console.log("test!")

let player = document.querySelector("#player");
let body = document.querySelector("body");
let board = document.querySelector("#container");

let playerInitialPos = 2;   // To get the initial position of the player and get and update the current value of the player

let obstacleArray = [];
let obstaclePositionArray = [];

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

// Function to move the obstacle
function moveObs(){
    obstacleArray.forEach((obstacle, index)=>{
        obstaclePositionArray[index] += 1
        obstacle.style.transform = `translateY(${obstaclePositionArray[index]}vh)`
    })
}

// Function to make the obstacles
function makeObs () {
    setTimeout(()=>{

        let randObsGridCol = Math.ceil( Math.random() * 3 );

        let obstacle = document.createElement("div");
        obstacle.className = "obstacle";
        obstacle.style.gridColumn = randObsGridCol;
        obstaclePositionArray.push(0);
        obstacleArray.push(obstacle);
        board.appendChild(obstacle)

    }, 2000)
}

// Function to remove the obstacles outisde of the board
function removeObs () {
    obstacleArray.forEach((obstacle, index)=>{
        if (obstacle.style.transform === "translateY(71vh)"){
            board.removeChild(obstacle);
            obstaclePositionArray.splice(index, 1);
            obstacleArray.splice(index, 1);
        }
    })
}

// Game Loop
setInterval(()=>{

    // Loop to spawn the obstacles
    makeObs()

    // obstacleArray.forEach((obstacle, index) => {
        // obstacle.style.gridRow += 1;

        // obstacle.style.transform = "translateX(10px)"

        // if (obstacle.style.gridRow > 6) {
        //     board.removeChild(obstacle);
        //     obstacleArray.splice(index, 1);
        // }
    // })
    
    // obstacleArray.forEach((obstacle, index) => {
    //     if (obstacle.style.gridRow > 6) {
    //         board.removeChild(obstacle);
    //         obstacleArray.splice(index, 1);
    //     }
    // })

    moveObs()

    removeObs()

}, 100)
