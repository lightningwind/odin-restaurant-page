const createContactPage = () => {
  const contentEle = document.querySelector('#content');
  const pageContentEle = document.createElement('div');
  pageContentEle.classList.add('page-content');

  const formEle = document.createElement('form');
  formEle.classList.add('contact-form');

  const headingInputEle = document.createElement('input');
  headingInputEle.type = 'text';
  headingInputEle.placeholder = 'Enter heading...'

  const addrInputEle = document.createElement('input');
  addrInputEle.type = 'text';
  addrInputEle.placeholder = 'Enter address...';

  const phoneInputEle = document.createElement('input');
  phoneInputEle.type = 'tel';
  phoneInputEle.placeholder = 'Enter phone number...';

  const submitBtnEle = document.createElement('input');
  submitBtnEle.type = 'submit';
  submitBtnEle.value = 'Submit';
  
  formEle.appendChild(headingInputEle);
  formEle.appendChild(addrInputEle);
  formEle.appendChild(phoneInputEle);
  formEle.appendChild(submitBtnEle);

  pageContentEle.appendChild(formEle);
  contentEle.appendChild(pageContentEle);
};

export default createContactPage;