const createTitle = () => {
  const title = document.createElement('h3');
  title.classList.add('title-header', 'text-center', 'py-5');
  title.textContent = 'Contact';
  return title;
};

const createContactSection = () => {
  const container = document.createElement('div');
  container.classList.add('contact-section', 'mx-auto');
  const phone = document.createElement('p');
  phone.textContent = 'Phone: ###-####-####';
  const email = document.createElement('p');
  email.textContent = 'Email: email@email.com';
  const location = document.createElement('p');
  location.textContent = 'Location: 1337 Place, Location, LC';
  container.append(phone);
  container.append(email);
  container.append(location);

  return container;
};

const createContact = (container) => {
  container.append(createTitle());
  container.append(createContactSection());
};

export default createContact;