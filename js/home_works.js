window.onload = function () {
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');

    let posX = 0;
    let posY = 0;

    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;


    function moveRight() {
        const interval = setInterval(() => {
            if (posX >= parentWidth - childBlock.offsetWidth) {
                clearInterval(interval);
                moveDown();
            } else {
                posX += 1;
                childBlock.style.left = posX + 'px';
            }
        }, 10);
    }


    function moveDown() {
        const interval = setInterval(() => {
            if (posY >= parentHeight - childBlock.offsetHeight) {
                clearInterval(interval);
            } else {
                posY += 1;
                childBlock.style.top = posY + 'px';
            }
        }, 10);
    }

    childBlock.style.left = posX + 'px';
    childBlock.style.top = posY + 'px';

    setTimeout(() => {
        moveRight();
    }, 1000);

    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');

    gmailButton.addEventListener('click', function (event) {
        event.preventDefault();

        const enteredEmail = gmailInput.value.trim();

        const validGmail = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;

        if (validGmail.test(enteredEmail)) {
            gmailResult.textContent = 'правильный';
        } else {
            gmailResult.textContent = 'неправильный';
        }
    });




    const btnStart = document.getElementById("start");
    const btnStop= document.getElementById("stop");
    const btnReset= document.getElementById("reset");

    const divMlSeconds = document.getElementById("ml-secondsS");
    const divSeconds= document.getElementById("secondsS");


    var mlSeconds = 0;
    var seconds= 0;


    let timer = null;

    function startTimer() {
        if (!timer) {
            timer = setInterval(updateTimer, 10); // Запуск таймера с интервалом 10 миллисекунд (для миллисекунд)
        }
    }

    function updateTimer() {
        mlSeconds++;
        if (mlSeconds === 100) {
            mlSeconds = 0;
            seconds++;
        }
        divMlSeconds.textContent = mlSeconds < 10 ? `0${mlSeconds}` : mlSeconds;
        divSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }

    function stopTimer() {
        clearInterval(timer); // Остановка интервала
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
};
