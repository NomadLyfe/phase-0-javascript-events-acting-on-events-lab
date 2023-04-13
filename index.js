const dodger = document.querySelector('#dodger');
dodger.style.backgroundColor = '#FF69B4';
document.addEventListener('keydown', moveDodger);
function moveDodger(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
        moveDodgerRight();
    } else if (e.key === 'ArrowUp') {
        moveDodgerUp();
    } else if (e.key === 'ArrowDown') {
        moveDodgerDown();
    }
}
function moveDodgerLeft() {
    let number = parseInt(dodger.style.left.replace('px',''), 10);
    if (number > 0) {
        dodger.style.left = `${number - 10}px`;
    }
}
function moveDodgerRight() {
    let number = parseInt(dodger.style.left.replace('px',''), 10);
    if (number < 360) {
        dodger.style.left = `${number + 10}px`;
    }
}
function moveDodgerUp() {
    let number = parseInt(dodger.style.bottom.replace('px',''), 10);
    if (number < 380) {
        dodger.style.bottom = `${number + 10}px`;
    }
}
function moveDodgerDown() {
    let number = parseInt(dodger.style.bottom.replace('px',''), 10);
    if (number > 0) {
        dodger.style.bottom = `${number - 10}px`;
    }
}
