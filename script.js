[...document.querySelectorAll(".link-content")].forEach((button) => {
    button.addEventListener('click', () => {
        if(button.dataset.name == "resume"){
            window.open("https://drive.google.com/file/d/13wf10RDM-UKCLV-ZXVPVQB2bcGu7bbMT/view?usp=sharing","_blank");
        }
        else if(button.dataset.name == "portfolio"){
            window.open("https://g-sabareesh.github.io/SS-Portfolio","_blank");
        }
        else if(button.dataset.name == "linkedin"){
            window.open("https://www.linkedin.com/in/sabareeshsoundharg/","_blank");
        }
        else if(button.dataset.name == "github"){
            window.open("https://github.com/G-Sabareesh","_blank");
        }
        else if(button.dataset.name == "gmail"){
            window.open("mailto:sabareeshsoundar@gmail.com","_blank");
        }
    });
});