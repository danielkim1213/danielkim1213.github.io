const introText = "Name: Yewan Kim\n"
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
let introIndex = 0;



function typeIntro() {
    if (introIndex < introText.length) {
        textContainer.innerHTML = textContainer.innerHTML.substring(0,textContainer.innerHTML.length-1);
        textContainer.innerHTML += introText.charAt(introIndex);
        if(introText.charAt(introIndex) == " ")
        {
            setTimeout(typeIntro, 50);
        }
        else if(introText.charAt(introIndex) == "\n")
        {
            setTimeout(typeIntro, 300);
            textContainer.innerHTML += ("<br>");
        }
        else
        {
            setTimeout(typeIntro, 40);
        }
        introIndex++;
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
        typeIntro();
        typeButton.parentNode.removeChild(typeButton);
    });
} else {
    console.error("Button or text container not found in the DOM.");
}