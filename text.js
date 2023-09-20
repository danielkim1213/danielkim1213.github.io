const text = "Hello, this is a typing animation!";
const textContainer = document.getElementById("text-container");
const typeButton = document.getElementById("type-button");
let currentIndex = 0;



function typeText() {
    if (currentIndex < text.length) {
        textContainer.innerHTML += text.charAt(currentIndex);
        if(text.charAt(currentIndex) == " ")
        {
            setTimeout(typeText, 150);
        }
        else
        {
            setTimeout(typeText, 30 + Math.random()*60);
        }
        currentIndex++;
    } else {
        typeButton.disabled = false; // Enable the button when animation is complete
    }
}

if (typeButton && textContainer) {
    typeButton.addEventListener("click", () => {
        typeText();
        typeButton.parentNode.removeChild(typeButton);
    });
} else {
    console.error("Button or text container not found in the DOM.");
}