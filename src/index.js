// for about file
import { createAboutContent } from './about';
document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('about-btn');
    const contentDiv = document.getElementById('content');
aboutButton.addEventListener('click', () => {
    contentDiv.innerHTML = ''; // Clear existing content
    const aboutContent = createAboutContent();
    contentDiv.appendChild(aboutContent);
    });
});

// for contact file
import { createContactContent } from './contact'; 
// Get the contact button element
const contactButton = document.getElementById('contact-btn');
// Function to display contact content
function displayContactContent() {
  // Clear the content div
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
// Create and append the contact content
  const contactContent = createContactContent();
  contentDiv.appendChild(contactContent);
}
// Add event listener to the contact button
contactButton.addEventListener('click', displayContactContent);


// for menu file
import { createMenuContent } from './menu'; // Import the function to create menu content
// Get the menu button element
const menuButton = document.getElementById('menu-btn');
// Function to display menu content
function displayMenuContent() {
  // Clear the content div
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
// Create and append the menu content
  const menuContent = createMenuContent();
  contentDiv.appendChild(menuContent);
}
// Add event listener to the menu button
menuButton.addEventListener('click', displayMenuContent);

// for home file
import {createHomePage} from './modules/home'; 

// Get the home button element
const homeButton = document.getElementById('home-btn');

// Function to display home page content
function displayHomePage() {
  // Clear the content div
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

// Create and append the home page content
  createHomePage();
}

// Add event listener to the home button
homeButton.addEventListener('click', displayHomePage);

// Call the displayHomePage function when the page loads
window.addEventListener('load', displayHomePage);


import './styles.css';

