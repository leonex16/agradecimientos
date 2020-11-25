import { btnNavbarToggle } from 'moduleJs/navbar.js';
import { nameValidator } from 'moduleJs/body.js';

document.addEventListener('click', e => {
    e.target.id === 'path' ? btnNavbarToggle() : false;
    e.target.matches('.layer-security__btn') ? nameValidator() : false;
});