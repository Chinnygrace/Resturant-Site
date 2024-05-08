export function createMenuContent() {
 
// Create the dotted container
    const dottedContainer = document.createElement('div');
    dottedContainer.classList.add('dotted-container-content');
    dottedContainer.setAttribute('id', 'menu-container')

// dotted border style using CSS
   dottedContainer.style.border = '1px dashed rgba(255, 0, 0, 1)'; 

  // Defines an array of menu items data
    const menuItems = [
      { menuNumber: "Fried Rice", description: "Rice with Vegetables.", amount: "$100", imageUrl: "https://images.pexels.com/photos/3727196/pexels-photo-3727196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { menuNumber: "Potato chips and Sauce", description: "French Fries With Dipping Sauce.", amount: "$70", imageUrl: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600"},
      { menuNumber: "Chinese Fried Noodles", description: "Delicious and healthy noodles.", amount: "$120", imageUrl: "https://images.pexels.com/photos/3727198/pexels-photo-3727198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { menuNumber: "Chicken", description: "Roasted Chicken Wings.", amount: "$50", imageUrl: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { menuNumber: "Beef", description: "Homemade Pepper beef.", amount: "$80", imageUrl: "https://images.pexels.com/photos/4669250/pexels-photo-4669250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { menuNumber: "Nkwobi", description: "Spicy tender chunks of cow feet.", amount: "$100", imageUrl: "https://worldlytreat.com/wp-content/uploads/2023/03/Nkwobi-spicy-cow-leg.jpg" },
      { menuNumber: "Soup", description: "Okro soup and eba.", amount: "$70", imageUrl: "https://allnigerianfoods.com/wp-content/uploads/okro-2.jpg" },
      { menuNumber: "Burger", description: "Double cheeseburger with bacon slices.", amount: "$60", imageUrl: "https://chop-life-restaurant.netlify.app/d911b70fe9b0e3f89d86.png" },
      { menuNumber: "Abacha", description: "Freshly made Abacha.", amount: "$50", imageUrl: "https://ofefoods.com/storage/2021/07/abacha.jpeg" },
      { menuNumber: "Yam Porridge", description: "yam tubers, pepper mix and green leaves.", amount: "$80", imageUrl: "https://worldlytreat.com/wp-content/uploads/2023/01/Asaro-Nigerian-Yam-Porridge-2-1.jpg" }
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
