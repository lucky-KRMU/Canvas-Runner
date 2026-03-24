console.log("test!")

let player = document.querySelector("#player");
let body = document.querySelector("body");

let playerInitialPos = 2;   // To get the initial position of the player and get and update the current value of the player

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
})