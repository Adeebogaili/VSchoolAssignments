function sticky(){
    let navbar = document.getElementById('navbar');
    let scrollValue = window.scrollY;
    if(scrollValue > 20){
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
window.addEventListener('scroll', sticky);

// toggle menu/navbar script

const menuButton = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.menu');
const menuButtonI = document.querySelector('.menu-btn i')

menuButton.addEventListener('click', () => {
    menuButtonI.classList.toggle('active')
    navMenu.classList.toggle('active')

})