import homeFunc from './home';
import createContact from './contact';
import createMenu from './menu';

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const navbar = (content, container) => {
  const nav = document.createElement('nav');
  nav.classList.add('w-100', 'px-4', 'py-3', 'nav-bar', 'd-flex', 'justify-content-around', 'bg-light', 'text-dark');
  const homeNav = document.createElement('div');
  const menuNav = document.createElement('div');
  const contactNav = document.createElement('div');

  homeNav.classList.add('home');
  homeNav.id = 'fn';
  homeNav.textContent = 'Home';
  menuNav.classList.add('menu');
  menuNav.id = 'sn';
  menuNav.textContent = 'Menu';
  contactNav.classList.add('contact');
  contactNav.id = 'tn';
  contactNav.textContent = 'Contact';

  nav.appendChild(homeNav);
  nav.appendChild(menuNav);
  nav.appendChild(contactNav);

  content.appendChild(nav);
  content.appendChild(container);

  homeNav.addEventListener('click', () => {
    removeAllChildNodes(container);
    homeFunc(container);
  });
  menuNav.addEventListener('click', () => {
    removeAllChildNodes(container);
    createMenu(container);
  });
  contactNav.addEventListener('click', () => {
    removeAllChildNodes(container);
    createContact(container);
  });
};

export default navbar;