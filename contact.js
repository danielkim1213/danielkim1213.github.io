const contactText = "Check my profile at:\n- GitHub\n- LinkedIn\n\n"
            + "For contact, please email to kyw4091@gmail.com or kim506@mcmaster.ca\n"
            + "For urgent contact, please call me at (519)-731-8398.\n";

const contactContainer = document.getElementById("contact-container");
const contactButton = document.getElementById("contact-button");
let contactIndex = 0;

function typeContact() {
    if (contactIndex < contactText.length) {
        contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-1);
        contactContainer.innerHTML += contactText.charAt(contactIndex);
        if(contactText.charAt(contactIndex) == " ")
        {
            setTimeout(typeContact, 50);
        }
        else if(contactText.charAt(contactIndex) == "\n")
        {
            setTimeout(typeContact, 300);
            contactContainer.innerHTML += ("<br>");
        }
        else
        {
            setTimeout(typeContact, 40);
        }
        contactIndex++;
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
        typeContact();
        contactButton.parentNode.removeChild(contactButton);
    });
} else {
    console.error("Button or contact container not found in the DOM.");
}