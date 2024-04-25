


// *************** toggle icon navbar *******************************
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log('Menu icon clicked');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// **************Scroll des sections active ****
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    // ************** sticky navbar ****************************
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ************* remove toggle icon and navbar when click navbar link (scroll)****************************

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// **************Scroll reveal ************************************************************
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.homeContent h1, .heading', { origin: 'top' });
ScrollReveal().reveal('.homeImg, .letterContent p, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homeContent h2, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ************************* design carrousel ********************

// Variables globales
let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
    // On récupère le diaporama
    const diapo = document.querySelector(".diapo");
    // On récupère le data-speed
    speed = diapo.dataset.speed;
    transition = diapo.dataset.transition;

    elements = document.querySelector(".elements");

    // On clone la 1ère image
    let firstImage = elements.firstElementChild.cloneNode(true);

    // On injecte le clone à la fin du diapo
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);

    // On récupère la largeur d'une slide
    slideWidth = diapo.getBoundingClientRect().width;

    // On récupère les flèches
    let next = document.querySelector("#navDroite");
    let prev = document.querySelector("#navGauche");

    // On gère le clic
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    // On automatise le défilement
    timer = setInterval(slideNext, speed);

    // On gère l'arrêt et la reprise
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);
}

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
    // On incrémente le compteur
    compteur++;
    elements.style.transition = transition+"ms linear";

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    // On attend la fin de la transition et on "rembobine" de façon cachée
    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }
    }, transition);
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--;
    elements.style.transition = transition+"ms linear";

    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);
    }

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

}

function stopTimer(){
    clearInterval(timer);
}

function startTimer(){
    timer = setInterval(slideNext, speed);
}