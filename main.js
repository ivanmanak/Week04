var playerOne = document.getElementById("red");
var playerTwo = document.getElementById("green");
var playerThree = document.getElementById("blue");
var playerFour = document.getElementById("orange");
var playerFive = document.getElementById("yellow");


function startGame() {
    // setTimeout(function () {
    window.alert('The race is going to start...');
    // }, 10)

    // horse starting positions
    var playerOnePos = 0;
    var playerTwoPos = 0;
    var playerThreePos = 0;
    var playerFourPos = 0;
    var playerFivePos = 0;

    function finish() {
        if (playerOnePos >= document.body.clientWidth - 80) {
            playerOne.style.paddingLeft = document.body.clientWidth - 80 + 'px';

            var res = document.createElement("P");
            var winnerName = document.createTextNode("The winner is Chase");
            res.appendChild(winnerName);
            document.getElementById("winner").appendChild(res);
        } else if (playerTwoPos >= document.body.clientWidth - 80) {
            playerTwo.style.paddingLeft = document.body.clientWidth - 80 + 'px';

            var res = document.createElement("P");
            var winnerName = document.createTextNode("The winner is Marshall");
            res.appendChild(winnerName);
            document.getElementById("winner").appendChild(res);
        } else if (playerThreePos >= document.body.clientWidth - 80) {
            playerThree.style.paddingLeft = document.body.clientWidth - 80 + 'px';

            var res = document.createElement("P");
            var winnerName = document.createTextNode("The winner is Zuma");
            res.appendChild(winnerName);
            document.getElementById("winner").appendChild(res);
        } else if (playerFourPos >= document.body.clientWidth - 80) {
            playerFour.style.paddingLeft = document.body.clientWidth - 80 + 'px';

            var res = document.createElement("P");
            var winnerName = document.createTextNode("The winner is Skye");
            res.appendChild(winnerName);
            document.getElementById("winner").appendChild(res);
        } else {
            playerFive.style.paddingLeft = document.body.clientWidth - 80 + 'px';

            var res = document.createElement("P");
            var winnerName = document.createTextNode("The winner is Rocky");
            res.appendChild(winnerName);
            document.getElementById("winner").appendChild(res);
        }

        // return horses to their starting position
        playerOne.style.paddingLeft = 0;
        playerTwo.style.paddingLeft = 0;
        playerThree.style.paddingLeft = 0;
        playerFour.style.paddingLeft = 0;
        playerFive.style.paddingLeft = 0;
    }

    var id = setInterval(frame, 45);
    function frame() {
        if (playerOnePos >= document.body.clientWidth - 80
            || playerTwoPos >= document.body.clientWidth - 80
            || playerThreePos >= document.body.clientWidth - 80
            || playerFourPos >= document.body.clientWidth - 80
            || playerFivePos >= document.body.clientWidth - 80) {
            finish();
            clearInterval(id);
        } else {
            playerOnePos += (Math.random() * 20 + 1);
            playerOne.style.paddingLeft = playerOnePos + 'px';

            playerTwoPos += (Math.random() * 20 + 1);
            playerTwo.style.paddingLeft = playerTwoPos + 'px';

            playerThreePos += (Math.random() * 20 + 1);
            playerThree.style.paddingLeft = playerThreePos + 'px';

            playerFourPos += (Math.random() * 20 + 1);
            playerFour.style.paddingLeft = playerFourPos + 'px';

            playerFivePos += (Math.random() * 20 + 1);
            playerFive.style.paddingLeft = playerFivePos + 'px';
        }
    }

}

document.getElementById("start-button").addEventListener("click", function () {
    startGame();
})