const createMenuPage = () => {
  const contentEle = document.querySelector('#content');
  const pageContentEle = document.createElement('div');
  pageContentEle.classList.add('page-content');

  const headingEle = document.createElement('h1');
  headingEle.textContent = 'Menu';

  const menuListEle = document.createElement('ul');

  const menuItem1 = document.createElement('li');
  menuItem1.textContent = 'Pomodoro';

  const menuItem2 = document.createElement('li');
  menuItem2.textContent = 'Bolognesa';

  const menuItem3 = document.createElement('li');
  menuItem3.textContent = 'Alfredo';

  menuListEle.appendChild(menuItem1);
  menuListEle.appendChild(menuItem2);
  menuListEle.appendChild(menuItem3);

  pageContentEle.appendChild(headingEle);
  pageContentEle.appendChild(menuListEle);

  contentEle.appendChild(pageContentEle);
}

export default createMenuPage;