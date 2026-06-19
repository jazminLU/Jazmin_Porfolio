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
        'about.available': 'Available for work',
        'about.text': "QA Engineer turned DevOps — I build pipelines that don't just deliver fast, they deliver right. Hands-on with Docker, Kubernetes, Prometheus, Grafana and GitHub Actions, I embed quality at every stage of the delivery process.",
        'skills.heading': 'Skills', 'skills.subtitle': 'Technologies and tools I work with', 'skills.testing': 'QA & AUTOMATION', 'skills.devops': 'CLOUD & INFRASTRUCTURE', 'skills.cicd': 'DEVOPS & CI/CD',
        'services.heading': 'My <span>Services</span>',
        'services.cicd.title': 'CI/CD Pipelines',
        'services.cicd.desc': 'Automated CI/CD pipelines with GitHub Actions and Docker — with quality gates built in at every stage, not bolted on at the end.',
        'services.quality.title': 'Quality Engineering',
        'services.quality.desc': 'Automated testing across UI, API and performance layers (Cypress, Playwright, Postman, JMeter) — integrated directly into pipelines so teams ship fast and confidently.',
        'services.monitoring.title': 'Monitoring & Observability',
        'services.monitoring.desc': 'Monitoring stacks with Prometheus and Grafana — dashboards, alerts and observability practices that catch issues before they reach users.',
        'devops.heading': 'DevOps <span>Projects</span>',
        'devops.subtitle': 'Infrastructure, pipelines and observability — built from scratch.',
        'devops.featured': '★ Flagship',
        'devops.infra.desc': 'Full AWS cloud infrastructure with Terraform + Terragrunt, Kubernetes on EKS, zero-downtime deployments and a complete GitHub Actions CI/CD pipeline.',
        'devops.portfolio.desc': 'Portfolio containerized with Docker and served via NGINX — from static site to production-ready container as part of a 90-day DevOps challenge.',
        'devops.utn.desc': 'Infrastructure automation with Vagrant and VirtualBox to provision an Ubuntu VM with Apache, deploying a 3D web app automatically.',
        'projects.heading': 'Web <span>Projects</span>',
        'projects.cta.desc': 'DevOps infrastructure, CI/CD pipelines and web applications — built from scratch.',
        'projects.cta.btn': 'Explore all projects',
        'projects.page.heading': 'My <span>Projects</span>',
        'projects.page.subtitle': 'DevOps infrastructure, CI/CD pipelines and web apps — built from scratch.',
        'projects.page.back': '← Back to home',
        'contact.heading': 'Contact <span>Me</span>',
        'contact.h3': "Let's work together",
        'contact.desc': "Open to DevOps roles, QA automation projects and collaborations. Drop me a message and I'll get back to you.",
        'contact.label.email': 'Email', 'contact.wa.link': 'Send message',
        'contact.ph.name': 'Full name', 'contact.ph.email': 'Your email',
        'contact.ph.subject': 'Subject', 'contact.ph.message': 'Your message...',
        'contact.send': 'Send Message <i class=\'bx bx-send\'></i>',
        'modal.title': '✓ Message sent!', 'modal.desc': "Thanks for reaching out. I'll get back to you soon.", 'modal.btn': 'Close',
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
        'about.available': 'Disponible para trabajar',
        'about.text': 'QA Engineer devenida en DevOps — construyo pipelines que no solo entregan rápido, sino que entregan bien. Con experiencia práctica en Docker, Kubernetes, Prometheus, Grafana y GitHub Actions, integro calidad en cada etapa del proceso.',
        'skills.heading': 'Habilidades', 'skills.subtitle': 'Tecnologías y herramientas con las que trabajo', 'skills.testing': 'QA & AUTOMATIZACIÓN', 'skills.devops': 'CLOUD & INFRAESTRUCTURA', 'skills.cicd': 'DEVOPS & CI/CD',
        'services.heading': 'Mis <span>Servicios</span>',
        'services.cicd.title': 'Pipelines CI/CD',
        'services.cicd.desc': 'Pipelines CI/CD automatizados con GitHub Actions y Docker — con quality gates integrados en cada etapa, no agregados al final.',
        'services.quality.title': 'Ingeniería de Calidad',
        'services.quality.desc': 'Testing automatizado en UI, API y performance (Cypress, Playwright, Postman, JMeter) — integrado directo en los pipelines para entregar con velocidad y confianza.',
        'services.monitoring.title': 'Monitoreo y Observabilidad',
        'services.monitoring.desc': 'Stacks de monitoreo con Prometheus y Grafana — dashboards, alertas y prácticas de observabilidad que detectan problemas antes de que lleguen a los usuarios.',
        'devops.heading': 'Proyectos <span>DevOps</span>',
        'devops.subtitle': 'Infraestructura, pipelines y observabilidad — construidos desde cero.',
        'devops.featured': '★ Principal',
        'devops.infra.desc': 'Infraestructura AWS completa con Terraform + Terragrunt, Kubernetes en EKS, despliegues sin downtime y pipeline CI/CD con GitHub Actions.',
        'devops.portfolio.desc': 'Portfolio containerizado con Docker y servido via NGINX — de sitio estático a contenedor listo para producción como parte de un desafío DevOps de 90 días.',
        'devops.utn.desc': 'Automatización de infraestructura con Vagrant y VirtualBox para provisionar una VM Ubuntu con Apache y desplegar una app web 3D automáticamente.',
        'projects.heading': 'Proyectos <span>Web</span>',
        'projects.cta.desc': 'Infraestructura DevOps, pipelines CI/CD y aplicaciones web — construidos desde cero.',
        'projects.cta.btn': 'Explorar todos los proyectos',
        'projects.page.heading': 'Mis <span>Proyectos</span>',
        'projects.page.subtitle': 'Infraestructura DevOps, pipelines CI/CD y aplicaciones web — construidos desde cero.',
        'projects.page.back': '← Volver al inicio',
        'contact.heading': 'Contácta<span>me</span>',
        'contact.h3': 'Trabajemos juntos',
        'contact.desc': 'Abierta a roles DevOps, proyectos de automatización QA y colaboraciones. Enviame un mensaje y te respondo a la brevedad.',
        'contact.label.email': 'Correo', 'contact.wa.link': 'Enviar mensaje',
        'contact.ph.name': 'Nombre completo', 'contact.ph.email': 'Tu email',
        'contact.ph.subject': 'Asunto', 'contact.ph.message': 'Tu mensaje...',
        'contact.send': 'Enviar mensaje <i class=\'bx bx-send\'></i>',
        'modal.title': '✓ ¡Mensaje enviado!', 'modal.desc': 'Gracias por escribirme. Te respondo a la brevedad.', 'modal.btn': 'Cerrar',
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

    if (document.querySelector('.multiple-text')) {
        if (window.typedInstance) window.typedInstance.destroy();
        window.typedInstance = new Typed('.multiple-text', {
            strings: t.typedTexts,
            typeSpeed: 100, backSpeed: 100, backDelay: 1000, loop: true
        });
    }

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
            navLinks.forEach(links => links.classList.remove('active'));
            const activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
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

/*==================== emailjs contact form ====================*/
const EMAILJS_PUBLIC_KEY  = 'HutWTiDAAFeJFDuVy';
const EMAILJS_SERVICE_ID  = 'service_f53ofbm';
const EMAILJS_TEMPLATE_ID = 'template_rh4snms';

if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

const contactFormEl = document.getElementById('contactForm');
if (contactFormEl) contactFormEl.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn   = document.getElementById('submitBtn');
    const error = document.getElementById('formError');
    const lang  = localStorage.getItem('lang') || 'en';

    error.style.display = 'none';
    btn.disabled = true;
    btn.innerHTML = lang === 'es'
        ? 'Enviando… <i class="bx bx-loader-alt bx-spin"></i>'
        : 'Sending… <i class="bx bx-loader-alt bx-spin"></i>';

    try {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this);
        this.reset();
        document.getElementById('successModal').classList.add('active');
    } catch(err) {
        error.textContent = lang === 'es'
            ? 'Hubo un error al enviar. Intentá de nuevo.'
            : 'Something went wrong. Please try again.';
        error.style.display = 'block';
    } finally {
        btn.disabled = false;
        btn.innerHTML = lang === 'es'
            ? 'Enviar mensaje <i class="bx bx-send"></i>'
            : 'Send Message <i class="bx bx-send"></i>';
    }
});

function closeModal() {
    const el = document.getElementById('successModal');
    if (el) el.classList.remove('active');
}

// close modal clicking outside the card
const successModalEl = document.getElementById('successModal');
if (successModalEl) {
    successModalEl.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

// close modal with Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});



    