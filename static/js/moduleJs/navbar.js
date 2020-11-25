export { btnNavbarToggle };
const btnNavbarToggle = () => {
    let $ulNavbar = document.querySelector('.navbar-container__container-link');
    $ulNavbar.classList.toggle('navbar-container__container-link--left-0');
};