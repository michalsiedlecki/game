document.addEventListener("DOMContentLoaded", onReady)

import PlayerType from "./gameCanvas_Player.js"
import AnimationType from "./gameCanvas_Animantion.js"

function onReady() {
    const aBoard = document.getElementById("idGame");
    aCanvas = document.createElement("canvas");

    aCanvas.setAttribute("id", "idCanvas");
    aCanvas.style.display = "none";
    aCanvas.width = "640";
    aCanvas.height = "480";
    aBoard.appendChild(aCanvas);

    const aContext = aCanvas.getContext("2d");
    aBackground = new PlayerType({nWidth: 640, nHeight:480}),
    
    aPlayer = new PlayerType({
        x = 280,
        y = 140,
        nWidth: 75,
        nHeight: 114
    }),

    aEnemy = new PlayerType({
        x = 400,
        y = 140,
        nWidth: 126,
        nHeight: 114,
        bFlipH: true
    }),
    
    aAnimBackground = new AnimationType({
        strumURL: "image/game_background.jpg",
        context: aContext
    }),

    aAnimStand =  new AnimationType({
        strumURL: "image/luigi.png",
        context: aContext,
        nRate: 100
    }),

    aAnimStandEnemy =  new AnimationType({
        strumURL: "image/luigi.png",
        context: aContext,
        nRate: 350
    })

    aAnimBackground.appendFrame(0, 0);
    aAnimStand.appendFrame(20, 2);
    aAnimStand.appendFrame(98, 2);
    aAnimStand.appendFrame(176, 2);
    aAnimStand.appendFrame(250, 2);
    aAnimStand.appendFrame(325, 2);
    aAnimStand.appendFrame(395, 2);
    aAnimStand.appendFrame(465, 2);
    aAnimStand.appendFrame(538, 2);
    aAnimStand.appendFrame(608, 2);

    aAnimStandEnemy.appendFrame(1073, 308);
    aAnimStandEnemy.appendFrame(1193, 308);
    aAnimStandEnemy.appendFrame(1323, 308);
    aAnimStandEnemy.appendFrame(1473, 308);
    aAnimStandEnemy.appendFrame(1623, 308);

    aBackground.setAnimation(aAnimBackground);
    aPlayer.setAnimation(aAnimStand);
    aEnemy.setAnimation(aAnimStandEnemy);

        function gameLoop(){
            aBackground.draw();
            aEnemy.draw();
            aPlayer.draw();
            requestAnimationFrame(gameLoop);
        }
    aCanvas.style.display = "block";
    requestAnimationFrame(gameLoop);
}