const images = document.querySelectorAll('.figura, .figura1, .mapa-1, .mapa-2, .mapa-3, .figura2, .figura3');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img, iframe, nav, ul');

        image.classList.toggle('unset', entry.isIntersecting);

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