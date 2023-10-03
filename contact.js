const contactText = "Check my profile at:\n- GitHub\n- LinkedIn\n\n"
            + "Email: \n- kyw4091@gmail.com\n- kim506@mcmaster.ca\n\n"
            + "Call me at (519)-731-8398.\n";

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
        else if(contactText.substring(contactIndex-5,contactIndex+1) == "GitHub")
        {
            contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-6);
            const github = document.createElement('a');
            github.href = "https://github.com/danielkim1213"; 
            github.textContent = "GitHub";
            github.target = "_blank";
            github.style.color = "rgb(8, 168, 254)"
            contactContainer.appendChild(github);
            setTimeout(typeContact, 300);
        }        
        else if(contactText.substring(contactIndex-7,contactIndex+1) == "LinkedIn")
        {
            contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-8);
            const linkedin = document.createElement('a');
            linkedin.href = "https://www.linkedin.com/in/kim-yewan-9046a7218/"; 
            linkedin.textContent = "LinkedIn";
            linkedin.target = "_blank";
            linkedin.style.color = "rgb(8, 168, 254)"
            contactContainer.appendChild(linkedin);
            setTimeout(typeContact, 300);
        }
        else if(contactText.substring(contactIndex-16,contactIndex+1) == "kyw4091@gmail.com")
        {
            contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-17);
            const personalemail = document.createElement('a');
            personalemail.href = "https://mail.google.com/mail/?view=cm&fs=1&to=kyw4091@gmail.com"; 
            personalemail.textContent = "kyw4091@gmail.com";
            personalemail.target = "_blank";
            personalemail.style.color = "rgb(8, 168, 254)"
            contactContainer.appendChild(personalemail);
            setTimeout(typeContact, 200);
        }
        else if(contactText.substring(contactIndex-17,contactIndex+1) == "kim506@mcmaster.ca")
        {
            contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-18);
            const schoolemail = document.createElement('a');
            schoolemail.href = "mailto:kim506@mcmaster.ca"; 
            schoolemail.textContent = "kim506@mcmaster.ca";
            schoolemail.target = "_blank";
            schoolemail.style.color = "rgb(8, 168, 254)"
            contactContainer.appendChild(schoolemail);
            setTimeout(typeContact, 200);
        }
        else if(contactText.substring(contactIndex-13,contactIndex+1) == "(519)-731-8398")
        {
            contactContainer.innerHTML = contactContainer.innerHTML.substring(0,contactContainer.innerHTML.length-14);
            const phoneNumber = document.createElement('a');
            phoneNumber.href = "tel:5197318398"; 
            phoneNumber.textContent = "(519)-731-8398";
            phoneNumber.target = "_blank";
            phoneNumber.style.color = "rgb(8, 168, 254)"
            contactContainer.appendChild(phoneNumber);
            setTimeout(typeContact, 300);
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

