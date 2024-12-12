import { renderMenu } from "./render.js";
import { dishesData, data } from "./store.js";


const cartButton = document.querySelector('.nav__cart');
const cart = document.querySelector('.cart');
const navTheme = document.querySelector('.nav__theme');

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(dishesData);
    observeSections();

    const languages = data.languages.map(item => item.trim());
    const currentLanguage = data.language;
    const otherLanguages = languages.filter(lang => lang !== currentLanguage);
    let changeLangDom = document.querySelector('.nav__changeLang')

    if (otherLanguages.length == 1) {
        changeLangDom += `<a href="./menu-${languages[0]}.html">${languages[0].toUpperCase()}</a>`
    } else {
        changeLangDom.innerHTML = otherLanguages.map(lang => `<a href="./menu-${lang}.html">${lang.toUpperCase()}</a>`).join(' | ');
    };

});

window.addEventListener('scroll', () => {
    observeSections();
});

function observeSections() {
    const sections = document.querySelectorAll('.dishes__section');
    const links = document.querySelectorAll('.dishes__link');
    let closestSection = null;
    let closestDistance = Infinity;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        const distance = Math.abs(sectionCenter - screenCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
        };
    });

    if (closestSection) {
        links.forEach(link => {
            link.classList.remove('_active');
        });
        const activeLink = document.querySelector(`.dishes__link[href="#${closestSection.id}"]`);
        if (activeLink) {
            activeLink.classList.add('_active');
        };
    };
};



cartButton.onclick = function () {
    cartButton.classList.toggle('_active');
    cart.classList.toggle('_active');
    document.body.classList.toggle('_whenCart');
};


navTheme.onclick = function () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

let theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

document.body.classList.add(theme + '-theme');

if (theme != 'light' && theme != 'dark') {
    document.body.classList.add('light-theme')
};