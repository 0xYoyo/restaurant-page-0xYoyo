import loadHome from "./homePage";
import loadMenu from "./menuPage";
import loadContact from "./contactPage";
import renderHome from "./renderHome";
loadHome();

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", renderHome);
const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", loadMenu);
const contactButton = document.querySelector("#contactButton");
contactButton.addEventListener("click", loadContact);
