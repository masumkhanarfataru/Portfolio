const menuIcon = document.querySelector('#menu');
const navBar = document.querySelector('nav ul');
menuIcon.addEventListener('click', () =>{
  menuIcon.classList.toggle('fa-xmark');
  navBar.classList.toggle('active');
});