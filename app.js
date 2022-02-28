const card = document.querySelector('.card')
const container = document.querySelector('.container')

const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

container.addEventListener('mousemove', (e) => {
    let XAxis = ((window.innerWidth / 2) - e.pageX) / 15;
    let YAxis = ((window.innerHeight / 2) - e.pageY) / 15;
    card.style.transform = `rotateY(${YAxis}deg) rotateX(${XAxis}deg)`
});
// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    title.style.transform = `perspective(1000px) translateZ(75px)`;

    sneaker.style.transform = `perspective(1000px) translateZ(100px) rotateZ(-25deg)`;

    description.style.transform = `perspective(1000px) translateZ(50px)`;

    purchase.style.transform = `perspective(1000px) translateZ(50px)`;

    sizes.style.transform = `perspective(1000px) translateZ(50px)`;

});
// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    title.style.transform = `translateZ(0px)`;

    description.style.transform = `translateZ(0px)`;

    purchase.style.transform = `translateZ(0px)`;

    sizes.style.transform = `translateZ(0px)`;

    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
    
});