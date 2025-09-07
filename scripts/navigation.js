const navbuttom = document.querySelector('#ham-btn');
const navlink = document.querySelector('#nav-bar');


navbuttom.addEventListener('click', () => { 
    navbuttom.classList.toggle('show');
    navlink.classList.toggle('show');

});