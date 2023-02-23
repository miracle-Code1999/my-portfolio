

let sections = document.querySelectorAll('section')
let linkNav = document.querySelectorAll('.header nav a')



window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            linkNav.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='  + id + ']').classList.add('active');
            });
        };
    });

    /* ****************************sticky navbar***************************** */
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    menu.classList.remove('bx-x')
    navLink.classList.remove('active')
};


/*hamburger menu */
let menu = document.getElementById('menu')
let navLink = document.getElementById('navbar')


menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navLink.classList.toggle('active')
}

// the delay scroll script

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .about-image, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-image, .service-comtainer, .service-box, .portfolio-box, .contact form', { origin: 'bottom'});


//  script for typed 

const typed = new Typed('.multiple-text',{
    strings: ['I,m a FRONT-END DEVELOPER','WEB DESIGN','UI DESIGN','I AM PROGRAMMER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});