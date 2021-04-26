import './css/style.scss';
import navbar from './nav';
import homeFunc from './home';

const content = document.querySelector('#content');
const container = document.createElement('div');
container.classList.add('main-container');
navbar(content, container);
content.appendChild(container);
homeFunc(container);
