const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#ff69b4";
dodger.style.width = "28px";
dodger.style.left = "189px";
const gameField = document.getElementById('game');
gameField.style.width = '406px';
const doggie = document.createElement('img');
doggie.src = "./dog.jpg";
doggie.style.height = "20px";
dodger.appendChild(doggie);

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 7}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 378) {
        dodger.style.left = `${left + 7}px`;
    }
}

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 10}px`;
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 10}px`;
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
    else if (event.key === "ArrowUp"){
        moveDodgerUp();
    }
    else if (event.key === "ArrowDown"){
        moveDodgerDown();
    }
  });
