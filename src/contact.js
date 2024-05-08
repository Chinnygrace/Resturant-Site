export function createContactContent() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-content');

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone:  +234 811 238 6317";
    phoneNumber.classList.add("phone-number");

    const address = document.createElement("p");
    address.textContent = "Address: 97 Chime Ave, New Haven, Enugu 400102, Enugu...";
    address.classList.add("address");

    const img = document.createElement("img");
    img.src= "../src/images/map.jpg";
    img.classList.add("img");


    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(address);
    contactContainer.appendChild(img);

    return contactContainer;
}