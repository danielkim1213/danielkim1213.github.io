const text = "Name: Yewan Kim\n"
            + "Preferred Name: Daniel\n"
            + "Gender: Male\n"
            + "Age: 18\n"
            + "Academic career: Computer Science @ McMaster University\n"
            + "Year of Study: 2\n\n"
            + "Skills: \n"
            + "- Java\n"
            + "- Python\n"
            + "- HTML/CSS\n"
            + "- JavaScript\n"
            + "- C#\n"
            + "- C\n"
            + "- SAP ABAP\n"
            + "- Video Editing\n"



const textContainer = document.getElementById("text-container");
const typeButton = document.getElementById("type-button");
let currentIndex = 0;



function typeText() {
    if (currentIndex < text.length) {
        textContainer.innerHTML = textContainer.innerHTML.substring(0,textContainer.innerHTML.length-1);
        textContainer.innerHTML += text.charAt(currentIndex);
        if(text.charAt(currentIndex) == " ")
        {
            setTimeout(typeText, 50);
        }
        else if(text.charAt(currentIndex) == "\n")
        {
            setTimeout(typeText, 300);
            textContainer.innerHTML += ("<br>");
        }
        else
        {
            setTimeout(typeText, 40);
        }
        currentIndex++;
        textContainer.innerHTML += "|";
    } else {
        typeButton.disabled = false; 
        textContainer.innerHTML = textContainer.innerHTML.substring(0,textContainer.innerHTML.length-1);
        textContainer.innerHTML += "<br>";
    }
}

if (typeButton && textContainer) {
    typeButton.addEventListener("click", () => {
        typeButton.disabled = true; 
        typeText();
        typeButton.parentNode.removeChild(typeButton);
    });
} else {
    console.error("Button or text container not found in the DOM.");
}