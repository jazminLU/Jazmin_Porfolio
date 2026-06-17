/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let language = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        typedTexts: ['QA Engineer', 'DevOps Engineer'],
        'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills',
        'nav.services': 'Services', 'nav.devops': 'DevOps', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
        'home.greeting': "Hello, It's Me", 'home.and': "And I'm a",
        'home.tagline': 'Building reliable pipelines and automating quality from code to production.',
        'home.cv': 'View CV',
        'about.heading': 'About <span>Me</span>',
        'about.subtitle': 'QA Engineer | DevOps Engineer',
        'about.text': "I'm a QA Engineer with hands-on experience in test automation, CI/CD pipelines and infrastructure monitoring. My background in quality gives me a unique edge in DevOps: I build pipelines that don't just deliver fast, they deliver right. Experienced with Docker, Kubernetes, Prometheus, Grafana and GitHub Actions, I focus on embedding quality at every stage of the delivery process — from code to production. I thrive in agile teams where automation, observability and continuous improvement are part of the culture.",
        'skills.heading': 'Skills', 'skills.testing': 'Testing Skills', 'skills.devops': 'DevOps Skills',
        'services.heading': 'My <span>Services</span>',
        'services.cicd.title': 'CI/CD Pipelines',
        'services.cicd.desc': 'Designing and building automated CI/CD pipelines using GitHub Actions and Docker. I integrate automated testing gates, container builds and deployment stages to create fast, reliable and quality-driven delivery workflows. My QA background ensures that quality checks are embedded at every step — not bolted on at the end.',
        'services.quality.title': 'Quality Engineering',
        'services.quality.desc': 'End-to-end quality strategy combining automated testing (Cypress, Playwright, Appium) with API validation (Postman) and performance testing (JMeter). I bridge QA and DevOps by embedding automated quality gates directly into pipelines, enabling teams to ship confidently and continuously without sacrificing reliability.',
        'services.monitoring.title': 'Monitoring & Observability',
        'services.monitoring.desc': 'Setting up monitoring stacks with Prometheus and Grafana to give teams real-time visibility into application health and infrastructure performance. I build dashboards, configure alerts and establish observability practices that help detect issues before they reach users — closing the loop between deployment and reliability.',
        'devops.heading': 'DevOps <span>Projects</span>',
        'devops.subtitle': 'Infrastructure, pipelines and observability — built from scratch.',
        'devops.featured': '★ Flagship',
        'devops.infra.desc': 'Full cloud infrastructure for a DevTools platform on AWS. Automated deployment with Terraform + Terragrunt, Kubernetes orchestration via EKS, zero-downtime rolling updates, and a complete GitHub Actions CI/CD pipeline — from PR to production.',
        'devops.portfolio.desc': 'Portfolio website containerized with Docker and served through NGINX. Built as part of a 90-day DevOps challenge — from static site to production-ready container.',
        'devops.utn.desc': 'Infrastructure automation with Vagrant and VirtualBox to provision an Ubuntu VM running Apache. Deploys a 3D galaxy web app with automated server configuration.',
        'projects.heading': 'Web <span>Projects</span>',
        'contact.heading': 'Contact <span>Me</span>',
        'contact.h3': "Let's work together",
        'contact.desc': "Open to DevOps roles, QA automation projects and collaborations. Drop me a message and I'll get back to you.",
        'contact.label.email': 'Email', 'contact.wa.link': 'Send message',
        'contact.ph.name': 'Full name', 'contact.ph.email': 'Your email',
        'contact.ph.subject': 'Subject', 'contact.ph.message': 'Your message...',
        'contact.send': 'Send Message <i class=\'bx bx-send\'></i>',
        'footer.text': '© Copyright 2026 Jazmin Luna. All rights reserved.',
    },
    es: {
        typedTexts: ['QA Engineer', 'DevOps Engineer'],
        'nav.home': 'Inicio', 'nav.about': 'Sobre Mí', 'nav.skills': 'Habilidades',
        'nav.services': 'Servicios', 'nav.devops': 'DevOps', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
        'home.greeting': 'Hola, Soy', 'home.and': 'Y soy',
        'home.tagline': 'Construyendo pipelines confiables y automatizando calidad del código a producción.',
        'home.cv': 'Ver CV',
        'about.heading': 'Sobre <span>Mí</span>',
        'about.subtitle': 'QA Engineer | DevOps Engineer',
        'about.text': 'Soy QA Engineer con experiencia práctica en automatización de pruebas, pipelines CI/CD y monitoreo de infraestructura. Mi base en calidad me da una ventaja única en DevOps: construyo pipelines que no solo entregan rápido, sino que entregan bien. Con experiencia en Docker, Kubernetes, Prometheus, Grafana y GitHub Actions, me enfoco en integrar calidad en cada etapa del proceso — del código a producción. Me desarrollo mejor en equipos ágiles donde la automatización, la observabilidad y la mejora continua son parte de la cultura.',
        'skills.heading': 'Habilidades', 'skills.testing': 'Testing', 'skills.devops': 'DevOps',
        'services.heading': 'Mis <span>Servicios</span>',
        'services.cicd.title': 'Pipelines CI/CD',
        'services.cicd.desc': 'Diseño y construcción de pipelines CI/CD automatizados con GitHub Actions y Docker. Integro gates de testing automáticos, builds de contenedores y etapas de despliegue para crear flujos de entrega rápidos, confiables y orientados a la calidad. Mi background en QA asegura que los controles de calidad estén integrados en cada paso.',
        'services.quality.title': 'Ingeniería de Calidad',
        'services.quality.desc': 'Estrategia de calidad end-to-end que combina pruebas automatizadas (Cypress, Playwright, Appium) con validación de APIs (Postman) y pruebas de performance (JMeter). Conecto QA y DevOps integrando gates de calidad automáticos en los pipelines, para que los equipos entreguen con confianza y continuidad.',
        'services.monitoring.title': 'Monitoreo y Observabilidad',
        'services.monitoring.desc': 'Configuración de stacks de monitoreo con Prometheus y Grafana para dar visibilidad en tiempo real sobre la salud de las aplicaciones e infraestructura. Construyo dashboards, configuro alertas y establezco prácticas de observabilidad que detectan problemas antes de que lleguen a los usuarios.',
        'devops.heading': 'Proyectos <span>DevOps</span>',
        'devops.subtitle': 'Infraestructura, pipelines y observabilidad — construidos desde cero.',
        'devops.featured': '★ Principal',
        'devops.infra.desc': 'Infraestructura cloud completa para una plataforma DevTools en AWS. Despliegue automatizado con Terraform + Terragrunt, orquestación Kubernetes via EKS, actualizaciones sin downtime, y un pipeline CI/CD completo con GitHub Actions — del PR a producción.',
        'devops.portfolio.desc': 'Portfolio web containerizado con Docker y servido a través de NGINX. Construido como parte de un desafío DevOps de 90 días — de sitio estático a contenedor listo para producción.',
        'devops.utn.desc': 'Automatización de infraestructura con Vagrant y VirtualBox para provisionar una VM Ubuntu con Apache. Despliega una app web 3D con configuración de servidor automatizada.',
        'projects.heading': 'Proyectos <span>Web</span>',
        'contact.heading': 'Contácta<span>me</span>',
        'contact.h3': 'Trabajemos juntos',
        'contact.desc': 'Abierta a roles DevOps, proyectos de automatización QA y colaboraciones. Enviame un mensaje y te respondo a la brevedad.',
        'contact.label.email': 'Correo', 'contact.wa.link': 'Enviar mensaje',
        'contact.ph.name': 'Nombre completo', 'contact.ph.email': 'Tu email',
        'contact.ph.subject': 'Asunto', 'contact.ph.message': 'Tu mensaje...',
        'contact.send': 'Enviar mensaje <i class=\'bx bx-send\'></i>',
        'footer.text': '© Copyright 2026 Jazmin Luna. Todos los derechos reservados.',
    }
};

function applyLanguage(lang) {
    language = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    if (window.typedInstance) window.typedInstance.destroy();
    window.typedInstance = new Typed('.multiple-text', {
        strings: t.typedTexts,
        typeSpeed: 100, backSpeed: 100, backDelay: 1000, loop: true
    });

    localStorage.setItem('lang', lang);
}

let texts = { en: { typedTexts: translations.en.typedTexts }, es: { typedTexts: translations.es.typedTexts } };

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

/*==================== typed js + language init ====================*/
window.typedInstance = null;
applyLanguage(language);

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("cypress");
        habilidades[2].classList.add("JMeter");
        habilidades[3].classList.add("appium");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("postman");
        habilidades[6].classList.add("Communication");
        habilidades[7].classList.add("Teamwork");
        habilidades[8].classList.add("Creativity");
        habilidades[9].classList.add("dedication");
        habilidades[10].classList.add("proyect");
        habilidades[11].classList.add("githubactions");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades (skills)
window.onscroll = function(){
    efectoHabilidades();
} 


//document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add("visible");
        }, index * 300); 
    });


    