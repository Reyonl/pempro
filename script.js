const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleInput(button.dataset.value);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9' || ['+', '-', '*', '/'].includes(event.key)) {
        handleInput(event.key);
    } else if (event.key === 'Enter') {
        handleInput('=');
    } else if (event.key === 'Escape') {
        handleInput('C');
    }
});

function handleInput(value) {
    if (value === 'C') {
        display.value = '';
    } else if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}
