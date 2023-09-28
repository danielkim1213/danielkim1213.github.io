const introText = "Name: Yewan Kim\n"
            + "Preferred Name: Daniel\n"
            + "Gender: Male\n"
            + "Age: 18\n"
            + "University: McMaster\n"
            + "Major: Computer Science\n"
            + "Year of Study: 2\n\n"
            + "Skills: \n"
            + "- Java\n"
            + "- Python\n"
            + "- HTML/CSS\n"
            + "- JavaScript\n"
            + "- C#\n"
            + "- C\n"
            + "- Matlab\n"
            + "- SAP ABAP\n"
            + "- Haskell\n"
            + "- Elm\n\n"
            + "Download my resume\n"



const textContainer = document.getElementById("text-container");
const typeButton = document.getElementById("type-button");
let introIndex = 0;



function typeIntro() {
    if (introIndex < introText.length) {
        textContainer.innerHTML = textContainer.innerHTML.substring(0,textContainer.innerHTML.length-1);
        textContainer.innerHTML += introText.charAt(introIndex);
        if(introText.charAt(introIndex) == " ")
        {
            setTimeout(typeIntro, 45);
        }
        else if(introText.charAt(introIndex) == "\n")
        {
            setTimeout(typeIntro, 300);
            textContainer.innerHTML += ("<br>");
        }
        else if(introText.substring(introIndex-17,introIndex+1) == "Download my resume")
        {
            textContainer.innerHTML = textContainer.innerHTML.substring(0,textContainer.innerHTML.length-18);
            const resume = document.createElement('a');
            resume.href = "./resume (2).pdf"; 
            resume.textContent = "Download my resume";
            resume.target = "_blank";
            resume.style.color = "rgb(8, 168, 254)"
            textContainer.appendChild(resume);
            setTimeout(typeIntro, 300);
        }
        else
        {
            setTimeout(typeIntro, 35);
        }
        introIndex++;
        textContainer.innerHTML += "|";
    } else {
        typeButton.disabled = false; 
        textContainer.innerHTML = textContainer.innerHTML.substring(0,textContainer.innerHTML.length-1);
        textContainer.innerHTML += "<br>";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight*2; 
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