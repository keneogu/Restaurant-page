function MenuItem(name, src) {
	this.name = name;
	this.src = src;
  }
  
  const menu = [
	new MenuItem("Simple Cheese", "../src/images/meat-poriedge.jpeg"),
	new MenuItem("Mixed Foods", "../src/images/food.jpeg"),
	new MenuItem("Nigerian Jollof Rice", "../src/images/Nigerian-Jollof.jpeg"),
	new MenuItem("Vegetable Meal", "../src/images/veg.jpeg"),
  ];
  
  const createMenu = (container) => {
	// const content = document.querySelector('#content');
	container.append(createTitle());
	container.append(createMenuBackground());
  };
  
  const createTitle = () => {
	const title = document.createElement("h3");
	title.classList.add("title-header", "text-center", "py-4");
	title.innerText = "Menu";
	return title;
  };
  
  const createMenuBackground = () => {
	const background = document.createElement("div");
	background.classList.add("menu-background");
	menu.forEach((item) => {
	  background.append(createMenuItem(item));
	});
	return background;
  };
  
  const createMenuItem = ({ name, src }) => {
	const container = document.createElement("div");
	container.classList.add("menu-item", "mx-auto");
  
	const img = document.createElement("img");
	img.src = src;
	container.append(img);
  
	const p = document.createElement("p");
	p.innerText = name;
	container.append(p);
  
	return container;
  };
  
  export { createMenu };