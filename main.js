/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _restaurant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.js */ "./src/restaurant.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");



function loadPage() {
  (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_restaurant_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ "./src/restaurant.js");




const createTabs = () => {
  const contentEle = document.querySelector('#content');

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  div1.setAttribute('id', 'home-btn');
  div2.setAttribute('id', 'menu-btn');
  div3.setAttribute('id', 'contact-btn');

  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');

  div1.textContent = 'Home';
  div2.textContent = 'Menu';
  div3.textContent = 'Contact';

  contentEle.appendChild(div1);
  contentEle.appendChild(div2);
  contentEle.appendChild(div3);

  div1.addEventListener('click', () => {
    clearContent();
    (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__["default"])();
  })

  div2.addEventListener('click', () => {
    clearContent();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })

  div3.addEventListener('click', () => {
    clearContent();
    (0,_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
  })
};

function clearContent() {
  const contentEle = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');
  contentEle.removeChild(pageContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");


(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ2pDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjBCO0FBQ3BCOztBQUVwQjtBQUNmLEVBQUUsb0RBQVU7QUFDWixFQUFFLDBEQUF3QjtBQUMxQjs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRztBQUNOO0FBQ2dCOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdURBQXdCO0FBQzVCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksaURBQWM7QUFDbEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxvREFBaUI7QUFDckIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7O1VDakR6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQyxxREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc3RhdXJhbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgcGFnZUNvbnRlbnRFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFnZUNvbnRlbnRFbGUuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XG5cbiAgY29uc3QgZm9ybUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybUVsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWZvcm0nKTtcblxuICBjb25zdCBoZWFkaW5nSW5wdXRFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBoZWFkaW5nSW5wdXRFbGUudHlwZSA9ICd0ZXh0JztcbiAgaGVhZGluZ0lucHV0RWxlLnBsYWNlaG9sZGVyID0gJ0VudGVyIGhlYWRpbmcuLi4nXG5cbiAgY29uc3QgYWRkcklucHV0RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYWRkcklucHV0RWxlLnR5cGUgPSAndGV4dCc7XG4gIGFkZHJJbnB1dEVsZS5wbGFjZWhvbGRlciA9ICdFbnRlciBhZGRyZXNzLi4uJztcblxuICBjb25zdCBwaG9uZUlucHV0RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcGhvbmVJbnB1dEVsZS50eXBlID0gJ3RlbCc7XG4gIHBob25lSW5wdXRFbGUucGxhY2Vob2xkZXIgPSAnRW50ZXIgcGhvbmUgbnVtYmVyLi4uJztcblxuICBjb25zdCBzdWJtaXRCdG5FbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXRCdG5FbGUudHlwZSA9ICdzdWJtaXQnO1xuICBzdWJtaXRCdG5FbGUudmFsdWUgPSAnU3VibWl0JztcbiAgXG4gIGZvcm1FbGUuYXBwZW5kQ2hpbGQoaGVhZGluZ0lucHV0RWxlKTtcbiAgZm9ybUVsZS5hcHBlbmRDaGlsZChhZGRySW5wdXRFbGUpO1xuICBmb3JtRWxlLmFwcGVuZENoaWxkKHBob25lSW5wdXRFbGUpO1xuICBmb3JtRWxlLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bkVsZSk7XG5cbiAgcGFnZUNvbnRlbnRFbGUuYXBwZW5kQ2hpbGQoZm9ybUVsZSk7XG4gIGNvbnRlbnRFbGUuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRFbGUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFBhZ2U7IiwiY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBwYWdlQ29udGVudEVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwYWdlQ29udGVudEVsZS5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRlbnQnKTtcblxuICBjb25zdCBoZWFkaW5nRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZ0VsZS50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICBjb25zdCBtZW51TGlzdEVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbWVudUl0ZW0xLnRleHRDb250ZW50ID0gJ1BvbW9kb3JvJztcblxuICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51SXRlbTIudGV4dENvbnRlbnQgPSAnQm9sb2duZXNhJztcblxuICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51SXRlbTMudGV4dENvbnRlbnQgPSAnQWxmcmVkbyc7XG5cbiAgbWVudUxpc3RFbGUuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgbWVudUxpc3RFbGUuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcbiAgbWVudUxpc3RFbGUuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcblxuICBwYWdlQ29udGVudEVsZS5hcHBlbmRDaGlsZChoZWFkaW5nRWxlKTtcbiAgcGFnZUNvbnRlbnRFbGUuYXBwZW5kQ2hpbGQobWVudUxpc3RFbGUpO1xuXG4gIGNvbnRlbnRFbGUuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRFbGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51UGFnZTsiLCJpbXBvcnQgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlIGZyb20gJy4vcmVzdGF1cmFudC5qcyc7XG5pbXBvcnQgY3JlYXRlVGFicyBmcm9tICcuL3RhYnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY3JlYXRlVGFicygpO1xuICBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UoKTtcbn0iLCJjb25zdCBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IHBhZ2VDb250ZW50RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBhZ2VDb250ZW50RWxlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuXG4gIGNvbnN0IGhlYWRpbmdFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nRWxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gb3VyIHdvbmRlcmZ1bCByZXN0YXVyYW50ISc7XG4gIHBhZ2VDb250ZW50RWxlLmFwcGVuZENoaWxkKGhlYWRpbmdFbGUpO1xuXG4gIGNvbnN0IGltZ0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFbGUuc3JjID0gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9zYWdhY2l0eS9pbWFnZS91cGxvYWQvdjE1Mjk1MTIxMTYvSU1HLTk3MTBfcWw2YWZ4LmpwZ1wiO1xuICBpbWdFbGUuaGVpZ2h0ID0gNTAwO1xuICBwYWdlQ29udGVudEVsZS5hcHBlbmRDaGlsZChpbWdFbGUpO1xuXG4gIGNvbnN0IGNvcHlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvcHlFbGUudGV4dENvbnRlbnQgPSAnV2Ugc2VydmUgdGhlIGJlc3QgZm9vZCBpbiB0b3duISBDb21lIGFuZCB0YXN0ZSBpdCEnO1xuICBwYWdlQ29udGVudEVsZS5hcHBlbmRDaGlsZChjb3B5RWxlKTtcblxuICBjb250ZW50RWxlLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50RWxlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlOyIsImltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSBmcm9tIFwiLi9yZXN0YXVyYW50XCI7XG5cbmNvbnN0IGNyZWF0ZVRhYnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZGl2MS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtYnRuJyk7XG4gIGRpdjIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ0bicpO1xuICBkaXYzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcblxuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBkaXYzLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gIGRpdjEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGRpdjIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGRpdjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgY29udGVudEVsZS5hcHBlbmRDaGlsZChkaXYxKTtcbiAgY29udGVudEVsZS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgY29udGVudEVsZS5hcHBlbmRDaGlsZChkaXYzKTtcblxuICBkaXYxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSgpO1xuICB9KVxuXG4gIGRpdjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgfSlcblxuICBkaXYzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG4gIH0pXG59O1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRlbnQnKTtcbiAgY29udGVudEVsZS5yZW1vdmVDaGlsZChwYWdlQ29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vcGFnZUxvYWRcIjtcblxubG9hZFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=