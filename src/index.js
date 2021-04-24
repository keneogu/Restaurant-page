import './css/style.scss';
import * as nav from './nav';
import { homeFunc } from './home';
import { createContact } from "./contact.js";
import { createMenu } from "./menu.js";


const content = document.querySelector('#content');

nav.navbar();
homeFunc();
createContact();
createMenu();