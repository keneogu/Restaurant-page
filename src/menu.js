import chesse from './images/chicken.jpg';
import food from './images/food.jpeg';
import jollof from './images/jollof.jpeg';
import veg from './images/veg.jpeg';

function MenuItem(name, src) {
  this.name = name;
  this.src = src;
}

const menu = [
  new MenuItem('Simple Cheese', chesse),
  new MenuItem('Mixed Foods', food),
  new MenuItem('Nigerian Jollof Rice', jollof),
  new MenuItem('Vegetable Meal', veg),
];

const createMenuItem = ({ name, src }) => {
  const container = document.createElement('div');
  container.classList.add('menu-item', 'mx-auto');

  const img = document.createElement('img');
  img.src = src;
  container.append(img);

  const p = document.createElement('p');
  p.innerText = name;
  container.append(p);

  return container;
};

const createTitle = () => {
  const title = document.createElement('h3');
  title.classList.add('title-header', 'text-center', 'py-4');
  title.innerText = 'Menu';
  return title;
};

const createMenuBackground = () => {
  const background = document.createElement('div');
  background.classList.add('menu-background');
  menu.forEach((item) => {
    background.append(createMenuItem(item));
  });
  return background;
};

const createMenu = (container) => {
  container.append(createTitle());
  container.append(createMenuBackground());
};

export default createMenu;