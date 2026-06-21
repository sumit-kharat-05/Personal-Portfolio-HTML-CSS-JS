const toggle = document.getElementById("#menu-toggle")

if (toggle) {
    toggle.addEventListener("change",()=>{
    document.body.classList.toggle("no-scroll");
    });
}

const words = [
    "Web Developer",
    "Full Stack Web Developer",
    "Software Developer",
    "Freelancer",
    "Intern"
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingDelay = 150;
const erasingDelay = 80;
const nextwordDelay = 1500;

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextwordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

