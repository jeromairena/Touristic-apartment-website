const images = document.querySelectorAll('section, .mini, figure, .dropdown');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('h1, p, a, button');

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