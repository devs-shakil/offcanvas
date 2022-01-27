const threeBarMenu = document.querySelector('.threeBarMenu');
const body = document.querySelector('body');
const containerFluid = document.querySelector('.container-fluid');
const cancel = document.querySelector('.cancel');

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
