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
        display.value = '';  
    } else if (value === 'CE') {
        display.value = display.value.slice(0, -1);  
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
            
        }
    });
});

// Smooth scrolling to the product section
document.getElementById('produkLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href'); // Get the target ID from the href
    const targetElement = document.querySelector(targetId); // Select the target element
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get the target position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Add smooth scrolling effect
    });
});

const text = "Beauty Booquet";
const typingEffectElement = document.getElementById("typing-effect");
let index = 0;
let typingDirection = 1; // 1 for typing, -1 for deleting

function type() {
    // Clear the content before starting the typing animation
    if (index === 0 && typingDirection === -1) {
        typingEffectElement.innerHTML = '';
    }
    
    if (typingDirection === 1) {
        if (index < text.length) {
            typingEffectElement.innerHTML += text.charAt(index);
            index++;
        } else {
            typingDirection = -1; // Start deleting
        }
    } else {
        if (index > 0) {
            typingEffectElement.innerHTML = typingEffectElement.innerHTML.slice(0, -1);
            index--;
        } else {
            typingDirection = 1; // Start typing again
        }
    }
    setTimeout(type, typingDirection === 1 ? 500 : 50); // Set typing and deleting speed
}
type();

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });