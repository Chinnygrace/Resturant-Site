export function createContactContent() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-content');

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: +234111222333";
    phoneNumber.classList.add("phone-number");

    const address = document.createElement("p");
    address.textContent = "Address: The restuarant address goes here...";
    address.classList.add("address");

    const img = document.createElement("img");
    img.src = "https://chop-life-restaurant.netlify.app/52c1f412b91544798d21.png";
    img.classList.add("img");


    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(address);
    contactContainer.appendChild(img);

    return contactContainer;
}