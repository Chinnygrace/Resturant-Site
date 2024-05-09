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
    img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZd7_6eKhlMAwOffnNJY0dDvE1Ivz7LY7n2ytNF7dwYMVWkfvKEw5no5PUIxAbwxuVtE&usqp=CAU";
    img.classList.add("img");


    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(address);
    contactContainer.appendChild(img);

    return contactContainer;
}