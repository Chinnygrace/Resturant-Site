export function createAboutContent() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-content');

    const about = document.createElement("h2");
    about.textContent = "About Us";
    about.classList.add("about");

    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    aboutDescription.classList.add("about-description");

    aboutContainer.appendChild(about);
    aboutContainer.appendChild(aboutDescription);
   
return aboutContainer;
}