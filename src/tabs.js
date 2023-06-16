import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
  const contentEle = document.querySelector('#content');

  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');

  btn1.setAttribute('id', 'home-btn');
  btn2.setAttribute('id', 'menu-btn');
  btn3.setAttribute('id', 'contact-btn');

  btn1.classList.add('tab');
  btn2.classList.add('tab');
  btn3.classList.add('tab');

  btn1.textContent = 'Home';
  btn2.textContent = 'Menu';
  btn3.textContent = 'Contact';

  contentEle.appendChild(btn1);
  contentEle.appendChild(btn2);
  contentEle.appendChild(btn3);

  btn1.addEventListener('click', () => {
    clearContent();
    createRestaurantHomePage();
  })

  btn2.addEventListener('click', () => {
    clearContent();
    createMenuPage();
  })

  btn3.addEventListener('click', () => {
    clearContent();
    createContactPage();
  })
};

function clearContent() {
  const contentEle = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');
  contentEle.removeChild(pageContent);
}

export default createTabs;