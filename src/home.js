
const homeFunc = () => {
  const main = document.createElement('div');
  main.classList.add('main', 'text-light');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-div');
  const heading = document.createElement('h1');
  heading.classList.add('home');
  heading.textContent = 'Kenz Restaurant'
  const paragraph = document.createElement('p');
  paragraph.classList.add('home-para');
  paragraph.textContent = 'Welcome to the home of your favourite delicacies. We serve the best in town. what you eat is what you\'re made of'
  const btn = document.createElement('button');
  btn.textContent = 'Menu';
  btn.classList.add('btn-menu', 'btn', 'btn-danger');
  
  mainDiv.appendChild(heading);
  mainDiv.appendChild(paragraph);
  mainDiv.appendChild(btn);
  main.appendChild(mainDiv);

  content.appendChild(main);

}

export {homeFunc};