function rules() {
    document.getElementById("rulesContent").style.visibility = "visible";
}

function closed() {
    document.getElementById("rulesContent").style.visibility = "hidden";
}

function playAgain() {
    document.getElementById("resultDeclare").style.visibility = "hidden";
    document.getElementById("rulesContent").style.visibility = "visible";
}

function playAgain() {
    document.getElementById("resultDeclare").style.visibility = "hidden";
    document.getElementsByClassName("playArea")[0].style.visibility = "visible";
    document.getElementsByClassName("img5")[0].style.top = "0px";
    document.getElementsByClassName("img5")[0].style.left = "0px";
    document.getElementsByClassName("img5")[0].style.width = "0px";
    document.getElementsByClassName("img5")[0].style.height = "0px";
}

var userScore = 0;
var userChoice = 0;
var pcChoice = 0;
document.getElementsByClassName("score")[0].innerHTML = userScore;

function generator() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function scissors() {
    userChoice = 1;
    document.getElementsByClassName("img4")[0].setAttribute("src", "images/scissors.png");
    document.getElementsByClassName("img4")[0].style.top = "17px";
    document.getElementsByClassName("img4")[0].style.left = "30px";
    document.getElementsByClassName("img4")[0].style.height = "57px";
    document.getElementsByClassName("img4")[0].style.width = "42px";
    document.getElementsByClassName("circle4")[0].style.borderColor = "rgb(245, 16, 168)";
    document.getElementsByClassName("circle4")[0].style.backgroundColor = "rgb(245, 16, 168)";
    pcChoice = generator();
    if (pcChoice == 1) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/scissors.png");
        document.getElementsByClassName("img5")[0].style.top = "17px";
        document.getElementsByClassName("img5")[0].style.left = "30px";
        document.getElementsByClassName("img5")[0].style.height = "57px";
        document.getElementsByClassName("img5")[0].style.width = "42px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(245, 16, 168)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(245, 16, 168)";
        document.getElementById("resultText").innerHTML = "DRAW";
    }
    if (pcChoice == 2) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/rock.png");
        document.getElementsByClassName("img5")[0].style.top = "16px";
        document.getElementsByClassName("img5")[0].style.left = "13px";
        document.getElementsByClassName("img5")[0].style.width = "73px";
        document.getElementsByClassName("img5")[0].style.height = "53px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(236, 213, 5)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(236, 213, 5)";
        document.getElementById("resultText").innerHTML = "YOU LOST";
        document.getElementsByClassName("score")[0].innerHTML = --userScore;
    }
    if (pcChoice == 3) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/paper.png");
        document.getElementsByClassName("img5")[0].style.top = "14px";
        document.getElementsByClassName("img5")[0].style.left = "18px";
        document.getElementsByClassName("img5")[0].style.height = "66px";
        document.getElementsByClassName("img5")[0].style.width = "66px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(209, 47, 47)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(209, 47, 47)";
        document.getElementById("resultText").innerHTML = "YOU WON";
        document.getElementsByClassName("score")[0].innerHTML = ++userScore;
    }
}

function rock() {
    userChoice = 1;
    document.getElementsByClassName("img4")[0].setAttribute("src", "images/rock.png");
    document.getElementsByClassName("img4")[0].style.top = "17px";
    document.getElementsByClassName("img4")[0].style.left = "13px";
    document.getElementsByClassName("img4")[0].style.height = "53px";
    document.getElementsByClassName("img4")[0].style.width = "73px";
    document.getElementsByClassName("circle4")[0].style.borderColor = "rgb(236, 213, 5)";
    document.getElementsByClassName("circle4")[0].style.backgroundColor = "rgb(236, 213, 5)";
    pcChoice = generator();
    if (pcChoice == 1) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/scissors.png");
        document.getElementsByClassName("img5")[0].style.top = "17px";
        document.getElementsByClassName("img5")[0].style.left = "30px";
        document.getElementsByClassName("img5")[0].style.height = "57px";
        document.getElementsByClassName("img5")[0].style.width = "42px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(245, 16, 168)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(245, 16, 168)";
        document.getElementById("resultText").innerHTML = "YOU WON";
        document.getElementsByClassName("score")[0].innerHTML = ++userScore;
    }
    if (pcChoice == 2) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/rock.png");
        document.getElementsByClassName("img5")[0].style.top = "16px";
        document.getElementsByClassName("img5")[0].style.left = "13px";
        document.getElementsByClassName("img5")[0].style.width = "73px";
        document.getElementsByClassName("img5")[0].style.height = "53px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(236, 213, 5)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(236, 213, 5)";
        document.getElementById("resultText").innerHTML = "DRAW";
    }
    if (pcChoice == 3) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/paper.png");
        document.getElementsByClassName("img5")[0].style.top = "14px";
        document.getElementsByClassName("img5")[0].style.left = "18px";
        document.getElementsByClassName("img5")[0].style.height = "66px";
        document.getElementsByClassName("img5")[0].style.width = "66px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(209, 47, 47)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(209, 47, 47)";
        document.getElementById("resultText").innerHTML = "YOU LOST";
        document.getElementsByClassName("score")[0].innerHTML = --userScore;
    }
}

function paper() {
    userChoice = 1;
    document.getElementsByClassName("img4")[0].setAttribute("src", "images/paper.png");
    document.getElementsByClassName("img4")[0].style.top = "14px";
    document.getElementsByClassName("img4")[0].style.left = "18px";
    document.getElementsByClassName("img4")[0].style.height = "66px";
    document.getElementsByClassName("img4")[0].style.width = "66px";
    document.getElementsByClassName("circle4")[0].style.borderColor = "rgb(209, 47, 47)";
    document.getElementsByClassName("circle4")[0].style.backgroundColor = "rgb(209, 47, 47)";
    pcChoice = generator();
    if (pcChoice == 1) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/scissors.png");
        document.getElementsByClassName("img5")[0].style.top = "17px";
        document.getElementsByClassName("img5")[0].style.left = "30px";
        document.getElementsByClassName("img5")[0].style.height = "57px";
        document.getElementsByClassName("img5")[0].style.width = "42px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(245, 16, 168)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(245, 16, 168)";
        document.getElementById("resultText").innerHTML = "YOU LOST";
        document.getElementsByClassName("score")[0].innerHTML = --userScore;
    }
    if (pcChoice == 2) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/rock.png");
        document.getElementsByClassName("img5")[0].style.top = "16px";
        document.getElementsByClassName("img5")[0].style.left = "13px";
        document.getElementsByClassName("img5")[0].style.width = "73px";
        document.getElementsByClassName("img5")[0].style.height = "53px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(236, 213, 5)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(236, 213, 5)";
        document.getElementById("resultText").innerHTML = "YOU WON";
        document.getElementsByClassName("score")[0].innerHTML = ++userScore;
    }
    if (pcChoice == 3) {
        document.getElementById("resultDeclare").style.visibility = "visible";
        document.getElementsByClassName("playArea")[0].style.visibility = "hidden";
        document.getElementsByClassName("img5")[0].setAttribute("src", "images/paper.png");
        document.getElementsByClassName("img5")[0].style.top = "14px";
        document.getElementsByClassName("img5")[0].style.left = "18px";
        document.getElementsByClassName("img5")[0].style.height = "66px";
        document.getElementsByClassName("img5")[0].style.width = "66px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "rgb(209, 47, 47)";
        document.getElementsByClassName("circle5")[0].style.borderColor = "rgb(209, 47, 47)";
        document.getElementById("resultText").innerHTML = "DRAW";
    }
}