


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

// *************************writting typed js************************
const typed = new Typed('.multiple-text', {
    strings:    ["une Future Développeuse Frontend", 
                "à la recherche d'un stage",
                "autonome et très motivée",
                "",
                ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,        
});