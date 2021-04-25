import { createMenu } from "./menu";

const homeFunc = (container) => {
  const main = document.createElement('div');
  main.classList.add('main', 'text-light');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-div', 'text-center');
  const heading = document.createElement('h1');
  heading.classList.add('home');
  heading.textContent = 'Kenz Restaurant'
  const paragraph = document.createElement('p');
  paragraph.classList.add('home-para');
  paragraph.textContent = 'Welcome to the home of your favourite delicacies. We serve the best in town. what you eat is what you\'re made of'
  
  mainDiv.appendChild(heading);
  mainDiv.appendChild(paragraph);
  main.appendChild(mainDiv);

  container.appendChild(main);
}

export default homeFunc;