const threeBarMenu = document.querySelector('.threeBarMenu');
const body = document.querySelector('body');
const containerFluid = document.querySelector('.container-fluid');
const cancel = document.querySelector('.cancel');
const scrollTo = document.querySelector('#scrollToUp');

const showNavbar = () => {
    containerFluid.style.left = "400px";
    body.classList.add('show');
};

const removeMenu = () =>{
    body.classList.remove('show');
    containerFluid.style.left = "0";
}

threeBarMenu.addEventListener('click',showNavbar );
cancel.addEventListener('click', removeMenu);


const navItems = [...document.querySelectorAll('.nav-items li a')]



navItems.map(element =>{
    element.addEventListener('click', (e) =>{
        e.preventDefault();
        const id = e.target.getAttribute('href');
        const section=document.querySelector(id).offsetTop;
        window.scroll({
            top: section,
            left: 0,
            behavior: 'smooth',
        });
    });
});




 
 function scrollToUp(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
       })
 }
 scrollTo.addEventListener('click',scrollToUp);