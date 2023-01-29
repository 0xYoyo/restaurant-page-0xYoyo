/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  // Reset\n  const contactBottom = document.querySelector(\".bottom\");\n  contactBottom.firstElementChild.remove();\n  const contactBottomL = document.createElement(\"div\");\n  contactBottomL.setAttribute(\"id\", \"contactBottomL\");\n  contactBottom.insertBefore(contactBottomL, contactBottom.lastElementChild);\n  // Populate\n  // Location\n  const box1 = document.createElement(\"div\");\n  box1.classList.add(\"box\");\n  contactBottomL.appendChild(box1);\n  const location = document.createElement(\"h2\");\n  location.textContent = \"Location\";\n  box1.appendChild(location);\n  const description = document.createElement(\"div\");\n  description.textContent = \"274 Dizengoff Street\";\n  box1.appendChild(description);\n  const cityCountry = document.createElement(\"div\");\n  cityCountry.textContent = \"Tel Aviv, Israel\";\n  box1.appendChild(cityCountry);\n  // Hours\n  const box2 = document.createElement(\"div\");\n  box2.classList.add(\"box\");\n  contactBottomL.appendChild(box2);\n  const hours = document.createElement(\"h2\");\n  hours.textContent = \"Open hours\";\n  box2.appendChild(hours);\n  const description2 = document.createElement(\"div\");\n  description2.textContent = \"Sunday-wednesday: 9am - 11pm\";\n  box2.appendChild(description2);\n  const description3 = document.createElement(\"div\");\n  description3.textContent = \"Thursday-Friday: 12pm - 2am\";\n  box2.appendChild(description3);\n  const description4 = document.createElement(\"div\");\n  description4.textContent = \"Closed Saturdays\";\n  box2.appendChild(description4);\n  // Contact\n  const box3 = document.createElement(\"div\");\n  box3.classList.add(\"box\");\n  contactBottomL.appendChild(box3);\n  const contactInfo = document.createElement(\"h2\");\n  contactInfo.textContent = \"Contact\";\n  box3.appendChild(contactInfo);\n  const phone = document.createElement(\"div\");\n  phone.textContent = \"(+972) 52-873-6027\";\n  box3.appendChild(phone);\n  const email = document.createElement(\"div\");\n  email.textContent = \"LeParmesano@gmail.com\";\n  box3.appendChild(email);\n}\n\n\n//# sourceURL=webpack://restaurant-page-0xyoyo/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const content = document.querySelector(\"#content\");\n  // Create classes\n  const top = document.createElement(\"div\");\n  top.classList.add(\"top\");\n  content.appendChild(top);\n  const bottom = document.createElement(\"div\");\n  bottom.classList.add(\"bottom\");\n  content.appendChild(bottom);\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  content.appendChild(footer);\n  // Populate top\n  // Top left\n  const topL = document.createElement(\"div\");\n  topL.setAttribute(\"id\", \"topL\");\n  topL.textContent = \"Le Parmesano\";\n  top.appendChild(topL);\n  // Top right\n  const topR = document.createElement(\"div\");\n  topR.setAttribute(\"id\", \"topR\");\n  top.appendChild(topR);\n  const home = document.createElement(\"div\");\n  home.setAttribute(\"id\", \"homeButton\");\n  home.textContent = \"Home\";\n  topR.appendChild(home);\n  const menu = document.createElement(\"div\");\n  menu.setAttribute(\"id\", \"menuButton\");\n  menu.textContent = \"Menu\";\n  topR.appendChild(menu);\n  const contact = document.createElement(\"div\");\n  contact.setAttribute(\"id\", \"contactButton\");\n  contact.textContent = \"Contact\";\n  topR.appendChild(contact);\n  // Populate bottom\n  // Bottom left\n  const bottomL = document.createElement(\"div\");\n  bottomL.setAttribute(\"id\", \"bottomL\");\n  bottom.appendChild(bottomL);\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"Enjoy our handmade pizza recipe since 1939\";\n  bottomL.appendChild(h1);\n  const ul = document.createElement(\"ul\");\n  bottomL.appendChild(ul);\n  const li1 = document.createElement(\"li\");\n  li1.textContent = \"Over 80 years of experience\";\n  ul.appendChild(li1);\n  const li2 = document.createElement(\"li\");\n  li2.textContent = \"Using the finest ingredients\";\n  ul.appendChild(li2);\n  const li3 = document.createElement(\"li\");\n  li3.textContent = \"100% organic\";\n  ul.appendChild(li3);\n  const li4 = document.createElement(\"li\");\n  li4.textContent = \"Rated in the top 10 pizzas in the world!\";\n  ul.appendChild(li4);\n  const li5 = document.createElement(\"li\");\n  li5.textContent = \"Made with a lot of love\";\n  ul.appendChild(li5);\n  // Bottom right\n  const bottomR = document.createElement(\"div\");\n  bottomR.setAttribute(\"id\", \"bottomR\");\n  bottom.appendChild(bottomR);\n  const image = document.createElement(\"img\");\n  image.setAttribute(\"src\", \"../images/pizza.jpg\");\n  image.setAttribute(\"alt\", \"pizza\");\n  bottomR.appendChild(image);\n  const credit = document.createElement(\"div\");\n  credit.setAttribute(\"id\", \"credit\");\n  credit.textContent = \"Photo by Ivan Torres on Unsplash\";\n  bottomR.appendChild(credit);\n  // Populate footer\n  footer.textContent = \"Copyright © 0xYoyo\";\n}\n\n\n//# sourceURL=webpack://restaurant-page-0xyoyo/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n/* harmony import */ var _renderHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderHome */ \"./src/renderHome.js\");\n\n\n\n\n(0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst homeButton = document.querySelector(\"#homeButton\");\nhomeButton.addEventListener(\"click\", _renderHome__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst menuButton = document.querySelector(\"#menuButton\");\nmenuButton.addEventListener(\"click\", _menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst contactButton = document.querySelector(\"#contactButton\");\ncontactButton.addEventListener(\"click\", _contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n//# sourceURL=webpack://restaurant-page-0xyoyo/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  // Reset\n  const menuBottom = document.querySelector(\".bottom\");\n  menuBottom.firstElementChild.remove();\n  const menuBottomL = document.createElement(\"div\");\n  menuBottomL.setAttribute(\"id\", \"menuBottomL\");\n  menuBottom.insertBefore(menuBottomL, menuBottom.lastElementChild);\n  // Populate\n  const card1 = document.createElement(\"div\");\n  card1.classList.add(\"card\");\n  menuBottomL.appendChild(card1);\n  const name = document.createElement(\"h2\");\n  name.textContent = \"Margherita\";\n  card1.appendChild(name);\n  const ingredients = document.createElement(\"div\");\n  ingredients.textContent =\n    \"Cheese, Secret tomato sauce, Basil and Virgin olive oil\";\n  card1.appendChild(ingredients);\n  const price = document.createElement(\"h3\");\n  price.textContent = \"19$\";\n  card1.appendChild(price);\n  // Card 2\n  const card2 = document.createElement(\"div\");\n  card2.classList.add(\"card\");\n  menuBottomL.appendChild(card2);\n  const name2 = document.createElement(\"h2\");\n  name2.textContent = \"Quattro formaggi\";\n  card2.appendChild(name2);\n  const ingredients2 = document.createElement(\"div\");\n  ingredients2.textContent =\n    \"Gouda Cheese, Goat cheese, Blue cheese and MOZARELLA\";\n  card2.appendChild(ingredients2);\n  const price2 = document.createElement(\"h3\");\n  price2.textContent = \"27$\";\n  card2.appendChild(price2);\n  // Card 3\n  const card3 = document.createElement(\"div\");\n  card3.classList.add(\"card\");\n  menuBottomL.appendChild(card3);\n  const name3 = document.createElement(\"h2\");\n  name3.textContent = \"Pepperoni\";\n  card3.appendChild(name3);\n  const ingredients3 = document.createElement(\"div\");\n  ingredients3.textContent =\n    \"Cheese, Secret tomato sauce and french pepperoni sausage\";\n  card3.appendChild(ingredients3);\n  const price3 = document.createElement(\"h3\");\n  price3.textContent = \"23$\";\n  card3.appendChild(price3);\n  // Card 4\n  const card4 = document.createElement(\"div\");\n  card4.classList.add(\"card\");\n  menuBottomL.appendChild(card4);\n  const name4 = document.createElement(\"h2\");\n  name4.textContent = \"Bianca\";\n  card4.appendChild(name4);\n  const ingredients4 = document.createElement(\"div\");\n  ingredients4.textContent =\n    \"Cheese, Garlic sauce, Portobello mushrooms and sprinkled truffle\";\n  card4.appendChild(ingredients4);\n  const price4 = document.createElement(\"h3\");\n  price4.textContent = \"31$\";\n  card4.appendChild(price4);\n}\n\n\n//# sourceURL=webpack://restaurant-page-0xyoyo/./src/menuPage.js?");

/***/ }),

/***/ "./src/renderHome.js":
/*!***************************!*\
  !*** ./src/renderHome.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHome)\n/* harmony export */ });\nfunction renderHome() {\n  // Reset\n  const bottom = document.querySelector(\".bottom\");\n  bottom.firstElementChild.remove();\n  const bottomL = document.createElement(\"div\");\n  bottomL.setAttribute(\"id\", \"bottomL\");\n  bottom.insertBefore(bottomL, bottom.lastElementChild);\n  // Repopulate\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"Enjoy our handmade pizza recipe since 1939\";\n  bottomL.appendChild(h1);\n  const ul = document.createElement(\"ul\");\n  bottomL.appendChild(ul);\n  const li1 = document.createElement(\"li\");\n  li1.textContent = \"Over 80 years of experience\";\n  ul.appendChild(li1);\n  const li2 = document.createElement(\"li\");\n  li2.textContent = \"Using the finest ingredients\";\n  ul.appendChild(li2);\n  const li3 = document.createElement(\"li\");\n  li3.textContent = \"100% organic\";\n  ul.appendChild(li3);\n  const li4 = document.createElement(\"li\");\n  li4.textContent = \"Rated in the top 10 pizzas in the world!\";\n  ul.appendChild(li4);\n  const li5 = document.createElement(\"li\");\n  li5.textContent = \"Made with a lot of love\";\n  ul.appendChild(li5);\n}\n\n\n//# sourceURL=webpack://restaurant-page-0xyoyo/./src/renderHome.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;