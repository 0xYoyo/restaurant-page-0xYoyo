export default function loadContact() {
  // Reset
  const contactBottom = document.querySelector(".bottom");
  contactBottom.firstElementChild.remove();
  const contactBottomL = document.createElement("div");
  contactBottomL.setAttribute("id", "contactBottomL");
  contactBottom.insertBefore(contactBottomL, contactBottom.lastElementChild);
  // Populate
  // Location
  const box1 = document.createElement("div");
  box1.classList.add("box");
  contactBottomL.appendChild(box1);
  const location = document.createElement("h2");
  location.textContent = "Location";
  box1.appendChild(location);
  const description = document.createElement("div");
  description.textContent = "274 Dizengoff Street";
  box1.appendChild(description);
  const cityCountry = document.createElement("div");
  cityCountry.textContent = "Tel Aviv, Israel";
  box1.appendChild(cityCountry);
  // Hours
  const box2 = document.createElement("div");
  box2.classList.add("box");
  contactBottomL.appendChild(box2);
  const hours = document.createElement("h2");
  hours.textContent = "Open hours";
  box2.appendChild(hours);
  const description2 = document.createElement("div");
  description2.textContent = "Sunday-wednesday: 9am - 11pm";
  box2.appendChild(description2);
  const description3 = document.createElement("div");
  description3.textContent = "Thursday-Friday: 12pm - 2am";
  box2.appendChild(description3);
  const description4 = document.createElement("div");
  description4.textContent = "Closed Saturdays";
  box2.appendChild(description4);
  // Contact
  const box3 = document.createElement("div");
  box3.classList.add("box");
  contactBottomL.appendChild(box3);
  const contactInfo = document.createElement("h2");
  contactInfo.textContent = "Contact";
  box3.appendChild(contactInfo);
  const phone = document.createElement("div");
  phone.textContent = "(+972) 52-873-6027";
  box3.appendChild(phone);
  const email = document.createElement("div");
  email.textContent = "LeParmesano@gmail.com";
  box3.appendChild(email);
}
