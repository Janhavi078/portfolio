let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList(links => {
                    links.classList.remove('active');
                });
            };
        });
        
    };
}