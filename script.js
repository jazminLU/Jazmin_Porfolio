/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let language = 'en';

let texts = {
    'en': {
        toggleIcon: 'Toggle Icon',
        scrollSections: 'Scroll Sections',
        stickyNavbar: 'Sticky Navbar',
        scrollReveal: 'Scroll Reveal',
        typedTexts: ['Quality Assurance', 'Quality Control', 'Manual Testing', 'Automation Testing']
    },
    'es': {
        toggleIcon: 'Alternar Icono',
        scrollSections: 'Desplazar Secciones',
        stickyNavbar: 'Navbar Fija',
        scrollReveal: 'Mostrar al Desplazar',
        typedTexts: ['Quality Assurance', 'Quality Control', 'Manual Testing', 'Automation Testing']
    }
    
};

/*==================== scroll section active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: texts[language].typedTexts,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("selenium");
        habilidades[3].classList.add("appium");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("Communication");
        habilidades[6].classList.add("Teamwork");
        habilidades[7].classList.add("Creativity");
        habilidades[8].classList.add("dedication");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


//document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add("visible");
        }, index * 300); // Adjust the delay as needed
    });
//});

