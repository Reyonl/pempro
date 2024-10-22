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
            } else if (['sin', 'cos', 'tan', 'log', 'ln', 'sqrt', 'pow', 'pi', 'e'].includes(value)) {
                handleScientific(value);
            } else {
                display.value += value;  
            }
        }

        function handleScientific(value) {
            const currentValue = parseFloat(display.value);
            if (isNaN(currentValue)) return;

            switch (value) {
                case 'sin':
                    display.value = Math.sin(currentValue);
                    break;
                case 'cos':
                    display.value = Math.cos(currentValue);
                    break;
                case 'tan':
                    display.value = Math.tan(currentValue);
                    break;
                case 'log':
                    display.value = Math.log10(currentValue);
                    break;
                case 'ln':
                    display.value = Math.log(currentValue);
                    break;
                case 'sqrt':
                    display.value = Math.sqrt(currentValue);
                    break;
                case 'pow':
                    // Add logic for exponentiation (e.g., `currentValue ** 2` for square)
                    break;
                case 'pi':
                    display.value = Math.PI;
                    break;
                case 'e':
                    display.value = Math.E;
                    break;
            }
        }

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