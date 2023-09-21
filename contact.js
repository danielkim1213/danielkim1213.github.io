const text = "Check my profile at:\n- GitHub\n- LinkedIn\n"
            + "For contact, please email to kyw4091@gmail.com or kim506@mcmaster.ca"
            + "For urgent contact, please call me at (519)-731-8398.";

const contactContainer = document.getElementById("contact-container");
const contactButton = document.getElementById("contact-button");
let currentIndex = 0;

function typeText() {
    if (currentIndex < text.length) {
        contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-1);
        contactContainer.innerHTML += text.charAt(currentIndex);
        if(text.charAt(currentIndex) == " ")
        {
            setTimeout(typeText, 50);
        }
        else if(text.charAt(currentIndex) == "\n")
        {
            setTimeout(typeText, 300);
            contactContainer.innerHTML += ("<br>");
        }
        else if(text.charAt(currentIndex) == "GitHub")
        {
            setTimeout(typeText, 300);
            contactContainer.innerHTML += ("<br>");
        }
        else
        {
            setTimeout(typeText, 40);
        }
        currentIndex++;
        contactContainer.innerHTML += "|";
    } else {
        contactButton.disabled = false; 
        contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-1);
        contactContainer.innerHTML += "<br>";
    }
}

if (contactButton && contactContainer) {
    contactButton.addEventListener("click", () => {
        contactButton.disabled = true; 
        typeText();
        contactButton.parentNode.removeChild(contactButton);
    });
} else {
    console.error("Button or contact container not found in the DOM.");
}