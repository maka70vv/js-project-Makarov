var gmailInput = document.getElementById('gmail_input');
var gmailButton = document.getElementById('gmail_button');
var gmailResult = document.getElementById('gmail_result');

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
