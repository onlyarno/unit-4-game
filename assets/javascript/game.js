const crystal = {
    black:
    {
        name: "black",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    red:
    {
        name: "red",
        value: 0
    },
    purple:
    {
        name: "purple",
        value: 0
    }
};

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {

    currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.black.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);

    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);

    console.log("-----------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("black: " + crystal.black.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
        " | purple: " + crystal.purple.value);
    console.log("-----------------------------------");
};

var checkWin = function () {

    if (currentScore > targetScore) {
        alert("lost!");
        console.log("lost");

        lossCount++;

        $("#loss-count").text(lossCount);

        startGame();
    }

    else if (currentScore === targetScore) {
        alert("won!");
        console.log("won!");

        winCount++;

        $("#win-count").text(winCount);

        startGame();
    }

};

var addValues = function (clickedCrystal) {

    currentScore += clickedCrystal.value;

    $("#your-score").text(currentScore);

    checkWin();

    console.log("Your Score: " + currentScore);
};

startGame();

$("#black").click(function () {
    addValues(crystal.black);
});

$("#green").click(function () {
    addValues(crystal.green);
});

$("#red").click(function () {
    addValues(crystal.red);
});

$("#purple").click(function () {
    addValues(crystal.purple);
});
