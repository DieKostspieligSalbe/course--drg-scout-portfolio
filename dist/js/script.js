const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
    burger.classList.add('focused');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('focused');
});

const percentages = document.querySelectorAll('.percent');
const percentageLines = document.querySelectorAll('.skills__percentage_actual');

percentages.forEach((element, index) => {
    percentageLines[index].style.width = element.innerHTML;
});