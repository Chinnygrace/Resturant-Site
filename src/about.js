export function createAboutContent() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-content');

    const about = document.createElement("h2");
    about.textContent = "About Us";
    about.classList.add("about");

    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = "Craving an explosion of taste? Look no further than Ntachi-Osa Kitchen! We're your one-stop shop for exciting and innovative dishes that tantalize your taste buds. More than just a meal it's an experience. Our name reflects our approach to cooking – a skillful blend of vibrant spices and precise techniques to create dishes that are both delicious and visually appealing. Whether you're a seasoned foodie or a curious adventurer, we have something for everyone. Our menu features a variety of offerings, from bold and spicy creations to more subtle flavor profiles. We use fresh, high-quality ingredients to ensure every bite is a delight. Imagine digging into a dish where every element has been carefully considered, where spices dance on your tongue, and textures create a symphony in your mouth.  That's the Ntachi-Osa Kitchen experience. We invite you to join us and discover a world of flavor where every dish is an adventure!."
    aboutDescription.classList.add("about-description");

    aboutContainer.appendChild(about);
    aboutContainer.appendChild(aboutDescription);
   
return aboutContainer;
}