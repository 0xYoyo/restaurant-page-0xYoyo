export default function renderHome() {
  // Reset
  const bottom = document.querySelector(".bottom");
  bottom.firstElementChild.remove();
  const bottomL = document.createElement("div");
  bottomL.setAttribute("id", "bottomL");
  bottom.insertBefore(bottomL, bottom.lastElementChild);
  // Repopulate
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
}
