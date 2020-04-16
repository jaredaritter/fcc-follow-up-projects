// NAV
const body = document.querySelector('body');
const nav = document.createElement('nav');

body.appendChild(nav);

const link1 = document.createElement('a');
const link2 = document.createElement('a');
const link3 = document.createElement('a');
const link4 = document.createElement('a');

nav.appendChild(link1);
    link1.textContent = "Link 1 ";
    link1.href = "https://www.google.com";
    link1.style.display = "block";
nav.appendChild(link2);
    link2.textContent = "Link 2 ";
    link2.href = "#";
    link2.style.display = "block";
nav.appendChild(link3);
    link3.textContent = "Link 3 ";
    link3.href = "#";
    link3.style.display = "block";
nav.appendChild(link4);
    link4.textContent = "Link 4 ";
    link4.href = "#";
    link4.style.display = "block";

// MAIN
const main = document.createElement('main');
const h1 = document.createElement('h1');
const para = document.createElement('p');

body.appendChild(main);
main.appendChild(h1);
    h1.textContent = "Made with JS";
main.appendChild(para);
    para.textContent = "No HTML was used in the creation of this HTML. Definitely the most efficient way of writing HTML";

