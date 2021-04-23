const content = document.querySelector('#content');

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('w-100', 'px-4', 'py-3', 'nav-bar', 'd-flex', 'justify-content-around', 'bg-light', 'text-dark');
  const f_nav = document.createElement('div');
  const s_nav = document.createElement('div');
  const t_nav = document.createElement('div');

  f_nav.classList.add('home', 'tab', 'nav-style');
  f_nav.id = 'fn';
  f_nav.textContent = 'Home';
  s_nav.classList.add('menu', 'tab', 'nav-style');
  s_nav.id = 'sn';
  s_nav.textContent = 'Menu';
  t_nav.classList.add('contact', 'tab', 'nav-style');
  t_nav.id = 'tn';
  t_nav.textContent = 'Contact';

//   f_nav.addEventListener('click', () => {
//     alert('this is testin home');
//   })
//   s_nav.addEventListener('click', () => {
// 	alert('thyisis second');
//   })
//   t_nav.addEventListener('click', () => {
// 	t_nav.classList.add('contact');
//   })

  nav.appendChild(f_nav);
  nav.appendChild(s_nav);
  nav.appendChild(t_nav);
  
  content.appendChild(nav);
}

export {navbar}