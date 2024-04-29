import { createMenuContent } from '../menu';

export function createHomePage() {
  const content = document.getElementById("content");

  // Create the dotted container
  const dottedContainer = document.createElement('div');
  dottedContainer.classList.add('dotted-container');

  // Set the dotted border style using CSS
  dottedContainer.style.border = '1px dashed rgb(233, 233, 18)'; 

  content.style.display = 'flex';
  content.style.justifyContent = 'center';

  // Append content to the dotted container
  const miniDescription = document.createElement("p");
  miniDescription.textContent = "Welcome to Chop-life- restaurant.";
  miniDescription.classList.add("mini-description");

  const description = document.createElement("p");
  description.textContent = "We are always there to serve you better. Try us today, you will never regret it.";
  description.classList.add("description");

  const image = document.createElement("img");
  image.src = "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png";
  image.classList.add("image"); 

  const orderDescription = document.createElement("h3");
  orderDescription.textContent = "Check our menu list to place your order now!!!";
  orderDescription.classList.add("order-description"); 

  const orderLink = document.createElement("a");
  orderLink.classList.add("order-link");
  orderLink.textContent = "ORDER";

      // Add event listener to the "ORDER" link
      orderLink.addEventListener('click', () => {
        // Call the function to display menu content
        const menuContent = createMenuContent();
        content.innerHTML = ''; // Clear existing content
        content.appendChild(menuContent);
    });

  
  dottedContainer.appendChild(miniDescription);
  dottedContainer.appendChild(description);
  dottedContainer.appendChild(image);
  dottedContainer.appendChild(orderDescription);
  dottedContainer.appendChild(orderLink);

  // Append the dotted container to the main content area
  content.appendChild(dottedContainer);
}