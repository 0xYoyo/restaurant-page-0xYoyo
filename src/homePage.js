export default function loadHome() {
  const content = document.querySelector("#content");
  // Create classes
  const top = document.createElement("div");
  top.classList.add("top");
  content.appendChild(top);
  const bottom = document.createElement("div");
  bottom.classList.add("bottom");
  content.appendChild(bottom);
  const footer = document.createElement("div");
  footer.classList.add("footer");
  content.appendChild(footer);
  // Populate top
  // Top left
  const topL = document.createElement("div");
  topL.setAttribute("id", "topL");
  topL.textContent = "Le Parmesano";
  top.appendChild(topL);
  // Top right
  const topR = document.createElement("div");
  topR.setAttribute("id", "topR");
  top.appendChild(topR);
  const home = document.createElement("div");
  home.setAttribute("id", "homeButton");
  home.textContent = "Home";
  topR.appendChild(home);
  const menu = document.createElement("div");
  menu.setAttribute("id", "menuButton");
  menu.textContent = "Menu";
  topR.appendChild(menu);
  const contact = document.createElement("div");
  contact.setAttribute("id", "contactButton");
  contact.textContent = "Contact";
  topR.appendChild(contact);
  // Populate bottom
  // Bottom left
  const bottomL = document.createElement("div");
  bottomL.setAttribute("id", "bottomL");
  bottom.appendChild(bottomL);
  const h1 = document.createElement("h1");
  h1.textContent = "Enjoy our handmade pizza recipe since 1939";
  bottomL.appendChild(h1);
  const ul = document.createElement("ul");
  bottomL.appendChild(ul);
  const li1 = document.createElement("li");
  li1.textContent = "Over 80 years of experience";
  ul.appendChild(li1);
  const li2 = document.createElement("li");
  li2.textContent = "Using the finest ingredients";
  ul.appendChild(li2);
  const li3 = document.createElement("li");
  li3.textContent = "100% organic";
  ul.appendChild(li3);
  const li4 = document.createElement("li");
  li4.textContent = "Rated in the top 10 pizzas in the world!";
  ul.appendChild(li4);
  const li5 = document.createElement("li");
  li5.textContent = "Made with a lot of love";
  ul.appendChild(li5);
  // Bottom right
  const bottomR = document.createElement("div");
  bottomR.setAttribute("id", "bottomR");
  bottom.appendChild(bottomR);
  const image = document.createElement("img");
  image.setAttribute("src", "./images/pizza.jpg");
  image.setAttribute("alt", "pizza");
  bottomR.appendChild(image);
  const credit = document.createElement("div");
  credit.setAttribute("id", "credit");
  credit.textContent = "Photo by Ivan Torres on Unsplash";
  bottomR.appendChild(credit);
  // Populate footer
  footer.textContent = "Copyright © 0xYoyo";
}
