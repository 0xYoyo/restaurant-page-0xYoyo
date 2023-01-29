export default function loadMenu() {
  // Reset
  const menuBottom = document.querySelector(".bottom");
  menuBottom.firstElementChild.remove();
  const menuBottomL = document.createElement("div");
  menuBottomL.setAttribute("id", "menuBottomL");
  menuBottom.insertBefore(menuBottomL, menuBottom.lastElementChild);
  // Populate
  const card1 = document.createElement("div");
  card1.classList.add("card");
  menuBottomL.appendChild(card1);
  const name = document.createElement("h2");
  name.textContent = "Margherita";
  card1.appendChild(name);
  const ingredients = document.createElement("div");
  ingredients.textContent =
    "Cheese, Secret tomato sauce, Basil and Virgin olive oil";
  card1.appendChild(ingredients);
  const price = document.createElement("h3");
  price.textContent = "19$";
  card1.appendChild(price);
  // Card 2
  const card2 = document.createElement("div");
  card2.classList.add("card");
  menuBottomL.appendChild(card2);
  const name2 = document.createElement("h2");
  name2.textContent = "Quattro formaggi";
  card2.appendChild(name2);
  const ingredients2 = document.createElement("div");
  ingredients2.textContent =
    "Gouda Cheese, Goat cheese, Blue cheese and MOZARELLA";
  card2.appendChild(ingredients2);
  const price2 = document.createElement("h3");
  price2.textContent = "27$";
  card2.appendChild(price2);
  // Card 3
  const card3 = document.createElement("div");
  card3.classList.add("card");
  menuBottomL.appendChild(card3);
  const name3 = document.createElement("h2");
  name3.textContent = "Pepperoni";
  card3.appendChild(name3);
  const ingredients3 = document.createElement("div");
  ingredients3.textContent =
    "Cheese, Secret tomato sauce and french pepperoni sausage";
  card3.appendChild(ingredients3);
  const price3 = document.createElement("h3");
  price3.textContent = "23$";
  card3.appendChild(price3);
  // Card 4
  const card4 = document.createElement("div");
  card4.classList.add("card");
  menuBottomL.appendChild(card4);
  const name4 = document.createElement("h2");
  name4.textContent = "Bianca";
  card4.appendChild(name4);
  const ingredients4 = document.createElement("div");
  ingredients4.textContent =
    "Cheese, Garlic sauce, Portobello mushrooms and sprinkled truffle";
  card4.appendChild(ingredients4);
  const price4 = document.createElement("h3");
  price4.textContent = "31$";
  card4.appendChild(price4);
}
