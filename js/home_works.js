window.onload = function () {
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
  






document.addEventListener('DOMContentLoaded', function() {
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');

    // Create and append the text element
    const dvdLabel = document.createElement('span');
    dvdLabel.textContent = 'DVD';
    dvdLabel.style.position = 'absolute';
    dvdLabel.style.top = '50%';
    dvdLabel.style.left = '50%';
    dvdLabel.style.transform = 'translate(-50%, -50%)';
    childBlock.appendChild(dvdLabel);

    let posX = Math.floor(Math.random() * (parentBlock.offsetWidth - childBlock.offsetWidth));
    let posY = Math.floor(Math.random() * (parentBlock.offsetHeight - childBlock.offsetHeight));
    let speedX = 2;
    let speedY = 2;

    function moveSquare() {
        const interval = setInterval(() => {
            if (posX >= parentBlock.offsetWidth - childBlock.offsetWidth || posX <= 0) {
                speedX = -speedX;
                changeColor();
            }
            if (posY >= parentBlock.offsetHeight - childBlock.offsetHeight || posY <= 0) {
                speedY = -speedY;
                changeColor();
            }

            posX += speedX;
            posY += speedY;

            childBlock.style.left = posX + 'px';
            childBlock.style.top = posY + 'px';
        }, 10);
    }

    function changeColor() {
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        childBlock.style.backgroundColor = randomColor;
    }

    moveSquare();
});


