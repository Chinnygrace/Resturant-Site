export function createMenuContent() {
 
// Create the dotted container
    const dottedContainer = document.createElement('div');
    dottedContainer.classList.add('dotted-container-content');
    dottedContainer.setAttribute('id', 'menu-container')

// dotted border style using CSS
   dottedContainer.style.border = '1px dashed rgb(233, 233, 18)'; 

  // Defines an array of menu items data
    const menuItems = [
      { menuNumber: "Menu_1", description: "The menu description will go here.", amount: "$50", imageUrl: "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png" },
      { menuNumber: "Menu_2", description: "The menu description will go here.", amount: "$50", imageUrl: "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png" },
      { menuNumber: "Menu_3", description: "The menu description will go here.", amount: "$50", imageUrl: "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png" },
      { menuNumber: "Menu_4", description: "The menu description will go here.", amount: "$50", imageUrl: "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png" },
      { menuNumber: "Menu_5", description: "The menu description will go here.", amount: "$50", imageUrl: "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png" },
      { menuNumber: "Menu_6", description: "The menu description will go here.", amount: "$50", imageUrl: "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png" }
  ];

  // Loop through each menu item and create corresponding HTML elements
  menuItems.forEach(item => {
      const menuItemDiv = document.createElement('div');
      menuItemDiv.classList.add('menu-item');

      const menuNumber = document.createElement('h2');
      menuNumber.textContent = item.menuNumber;
      menuNumber.classList.add('menu-number');
      menuItemDiv.appendChild(menuNumber);

      const image = document.createElement('img');
      image.src = item.imageUrl;
      image.classList.add("image-img");
      menuItemDiv.appendChild(image);

      const description = document.createElement('p');
      description.textContent = item.description;
      description.classList.add("menu-description");
      menuItemDiv.appendChild(description);

      const amount = document.createElement('strong');
      amount.textContent = item.amount;
      amount.classList.add("amount")
      menuItemDiv.appendChild(amount);

      // Append the menu item div to the menu container
      dottedContainer.appendChild(menuItemDiv);
  });

  return dottedContainer;
}
