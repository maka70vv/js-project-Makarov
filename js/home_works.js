var gmailInput = document.getElementById('gmail_input');
var gmailButton = document.getElementById('gmail_button');
var gmailResult = document.getElementById('gmail_result');
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

const divMlSeconds = document.getElementById("ml-secondsS");
const divSeconds = document.getElementById("secondsS");
const divMinutes = document.getElementById("minutesS");

var mlSeconds = 0;
var seconds = 0;

gmailButton.addEventListener('click', function () {
    var enteredEmail = gmailInput.value.trim();

    // Регулярное выражение для проверки, что email - это gmail
    var gmailRegex = /^[a-zA-Z0-9_.+-]+@gmail\.com$/;

    // Проверяем, что email - это gmail
    if (validateGmail(enteredEmail, gmailRegex)) {
        gmailResult.textContent = 'GMAIL!';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'Not Gmail...';
        gmailResult.style.color = 'red';
    }
});

function validateGmail(email, regex) {
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function dvizhenieIUUUU() {
    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
    const childWidth = childBlock.offsetWidth;
    const childHeight = childBlock.offsetHeight;

    let top = 0;
    let left = 0;
    let moveRight = true;

    const moveInterval = setInterval(() => {
        if (moveRight) {
            if (left + childWidth >= parentWidth) {
                moveRight = false;
            } else {
                left += 5;
            }
        } else {
            if (top + childHeight >= parentHeight) {
                clearInterval(moveInterval);
            } else {
                top += 5;
            }
        }

        childBlock.style.top = top + 'px';
        childBlock.style.left = left + 'px';
    }, 30);
}

dvizhenieIUUUU();

let timer = null;

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 10);
    }
}

function updateTimer() {
    mlSeconds++;
    if (mlSeconds === 100) {
        mlSeconds = 0;
        seconds++;
    }
    divMlSeconds.textContent = mlSeconds < 10 ? 0${mlSeconds} : mlSeconds;
    divSeconds.textContent = seconds < 10 ? 0${seconds} : seconds;
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    mlSeconds = 0;
    seconds = 0;
    divMlSeconds.textContent = "00";
    divSeconds.textContent = "00";
    timer = null;
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);
