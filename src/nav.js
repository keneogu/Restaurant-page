import homeFunc from "./home";
import { createContact } from "./contact";
import { createMenu } from "./menu";

// const container = document.querySelector('.contain');

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const navbar = (content, container) => {
  const nav = document.createElement('nav');
  nav.classList.add('w-100', 'px-4', 'py-3', 'nav-bar', 'd-flex', 'justify-content-around', 'bg-light', 'text-dark');
  const f_nav = document.createElement('div');
  const s_nav = document.createElement('div');
  const t_nav = document.createElement('div');


  f_nav.classList.add('home');
  f_nav.id = 'fn';
  f_nav.textContent = 'Home';
  s_nav.classList.add('menu');
  s_nav.id = 'sn';
  s_nav.textContent = 'Menu';
  t_nav.classList.add('contact');
  t_nav.id = 'tn';
  t_nav.textContent = 'Contact';

  nav.appendChild(f_nav);
  nav.appendChild(s_nav);
  nav.appendChild(t_nav);
  
  content.appendChild(nav);
  content.appendChild(container);

  f_nav.addEventListener('click', () => {
    removeAllChildNodes(container);
    homeFunc(container)
  })
  s_nav.addEventListener('click', () => {
    removeAllChildNodes(container);
   createMenu(container)
  })
  t_nav.addEventListener('click', () => {
    removeAllChildNodes(container);
   createContact(container)
  })
}

export default navbar