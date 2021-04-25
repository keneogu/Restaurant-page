import './css/style.scss';
import * as nav from './nav';
import homeFunc from './home';
import { createContact } from "./contact.js";
import { createMenu } from "./menu.js";


const content = document.querySelector('#content');
nav.navbar(content);
// navBarSetup();

const container = document.createElement('div');
container.classList.add('contain');
content.appendChild(container);

container.appendChild(homeFunc());

// const navBarSetup = () => {
// 	const home = document.querySelector("#Home");
// 	home.addEventListener("click", homeFunc);
// 	const menu = document.querySelector("#Menu");
// 	menu.addEventListener("click", createMenu);
// 	const contact = document.querySelector("#Contact");
// 	contact.addEventListener("click", createContact);
// };

// createContact();
// createMenu();