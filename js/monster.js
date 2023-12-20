
const car = document.getElementById('car');
document.addEventListener('mousemove', (event) => {
    car.style.left = (event.clientX - car.clientWidth / 2) + 'px';
    car.style.top = (event.clientY - car.clientHeight / 2) + 'px';
});

const gameContainer = document.querySelector('.game-container');
const scoreboard = document.querySelector('.scoreboard'); // Добавьте это
let score = 0;

function createCoin() {
    const coin = document.createElement('div');
    coin.className = 'coin';

    const maxX = gameContainer.clientWidth - 30;
    const maxY = gameContainer.clientHeight - 30;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    coin.style.left = randomX + 'px';
    coin.style.top = randomY + 'px';
    gameContainer.appendChild(coin);

    coin.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score; // Обновите счет
        coin.style.opacity = '0';
        setTimeout(() => {
            coin.remove();
            createCoin();
        }, 1000);
    });

    coin.style.transition = 'opacity 0.3s';
    coin.style.opacity = '1';

    setTimeout(() => {
        coin.remove();
        createCoin();
    }, 3000);
}

createCoin();
