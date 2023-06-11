const createRestaurantHomePage = () => {
  const contentEle = document.querySelector("#content");
  const pageContentEle = document.createElement('div');
  pageContentEle.classList.add('page-content');

  const headingEle = document.createElement('h1');
  headingEle.textContent = 'Welcome to our wonderful restaurant!';
  pageContentEle.appendChild(headingEle);

  const imgEle = document.createElement('img');
  imgEle.src = "https://res.cloudinary.com/sagacity/image/upload/v1529512116/IMG-9710_ql6afx.jpg";
  imgEle.height = 500;
  pageContentEle.appendChild(imgEle);

  const copyEle = document.createElement('p');
  copyEle.textContent = 'We serve the best food in town! Come and taste it!';
  pageContentEle.appendChild(copyEle);

  contentEle.appendChild(pageContentEle);
}

export default createRestaurantHomePage;