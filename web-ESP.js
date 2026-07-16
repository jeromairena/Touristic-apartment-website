const images = document.querySelectorAll('section, .mini, figure, .dropdown');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('h1, p, a, button');

        if (image) {
            image.classList.toggle('unset', entry.isIntersecting);
        }

    });
}

const options ={
    root: null,
    rootMargin: '0px',
    threshold: 0
}

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
})

const navToggle = document.querySelector('.nav-toggle');
const primaryMenu = document.querySelector('#primary-menu');

if (navToggle && primaryMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = primaryMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });
}


const languageSwitcher = document.querySelector('[data-language-switcher]');

if (languageSwitcher) {
    languageSwitcher.addEventListener('change', (event) => {
        const nextPage = event.target.value;

        if (nextPage) {
            window.location.href = nextPage;
        }
    });
}
