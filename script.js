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
    } else if (event.key === 'Backspace') {
        handleInput('CE');
    }
});

function handleInput(value) {
    if (value === 'C') {
        display.value = '';  // Clear all input
    } else if (value === 'CE') {
        display.value = display.value.slice(0, -1);  // Remove the last character
    } else if (value === '=') {
        try {
            display.value = eval(display.value);  // Evaluate the expression
        } catch {
            display.value = 'Error';  // Display error if evaluation fails
        }
    } else {
        display.value += value;  // Append the clicked or typed value
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        let display = document.getElementById('display');
        let value = this.getAttribute('data-value');
        
        if (value === 'sin') {
            display.value = Math.sin(parseFloat(display.value));
        } else if (value === 'cos') {
            display.value = Math.cos(parseFloat(display.value));
        } else if (value === 'tan') {
            display.value = Math.tan(parseFloat(display.value));
        } else if (value === 'log') {
            display.value = Math.log10(parseFloat(display.value));
        } else if (value === 'sqrt') {
            display.value = Math.sqrt(parseFloat(display.value));
        } else if (value === 'pow') {
            // Add logic for exponentiation
        } else if (value === 'pi') {
            display.value = Math.PI;
        } else if (value === 'e') {
            display.value = Math.E;
        } else {
            // Existing logic for other buttons
        }
    });
});

