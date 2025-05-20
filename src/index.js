// Import my CSS
import "./style.css";

// Import bootstrap custom CSS
import './scss/styles.scss';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

// import images
import image from "./img/fig-3640553_1280.jpg";
import image2 from "./img/loaf-2796393_1280.jpg";
import image3 from "./img/curry-7249247_1280.jpg";
import afang from "./img/afang.jpg";
import egusi from "./img/egusi.jpg";
import banga from "./img/banga.jpg";
import rice from "./img/rice.jpeg";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }


const  bgImage = new Image();
bgImage.src = image;
const bgImage2 = new Image();
bgImage2.src = image2;
const bgImage3 = new Image();
bgImage3.src = image3;
const afangImage = new Image();
afangImage.src = afang;
const egusiImage = new Image();
egusiImage.src = egusi;
const bangaImage = new Image();
bangaImage.src = banga;
const riceImage = new Image();
riceImage.src = rice;

const content = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');
const navItems = document.querySelectorAll('.navbar-nav .nav-item');



const homeHTML = () => {
    const carouselExampleCaptions = document.createElement('div');
    carouselExampleCaptions.setAttribute('id', 'carouselExampleCaptions');
    carouselExampleCaptions.setAttribute('class', 'carousel slide');

    const carouselIndicators = document.createElement('div');
    carouselIndicators.setAttribute('class', 'carousel-indicators');
    const button1 = document.createElement('button');
    button1.setAttribute('type', 'button');
    button1.setAttribute('data-bs-target', '#carouselExampleCaptions');
    button1.setAttribute('data-bs-slide-to', '0');
    button1.setAttribute('class', 'active');
    button1.setAttribute('aria-current', 'true');
    button1.setAttribute('aria-label', 'Slide 1');
    const button2 = document.createElement('button');
    button2.setAttribute('type', 'button');
    button2.setAttribute('data-bs-target', '#carouselExampleCaptions');
    button2.setAttribute('data-bs-slide-to', '1');
    button2.setAttribute('aria-label', 'Slide 2');
    const button3 = document.createElement('button');
    button3.setAttribute('type', 'button');
    button3.setAttribute('data-bs-target', '#carouselExampleCaptions');
    button3.setAttribute('data-bs-slide-to', '2');
    button3.setAttribute('aria-label', 'Slide 3');
    const carouselInner = document.createElement('div');
    carouselInner.setAttribute('class', 'carousel-inner');
    // carousel item 1
    const carouselItem1 = document.createElement('div');
    carouselItem1.setAttribute('class', 'carousel-item active');
    bgImage.setAttribute('class', 'd-block');

    const carouselCaption1 = document.createElement('div');
    carouselCaption1.setAttribute('class', 'carousel-caption');
    const carouselHeading1 = document.createElement('h1');
    carouselHeading1.setAttribute('class', 'display-3 text-dark fw-bold');
    carouselHeading1.innerText = `Coral Core`;
    const carouselParagraph1 = document.createElement('p');
    carouselParagraph1.setAttribute('class', 'lead');
    carouselParagraph1.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

    // catousel item 2
    const carouselItem2 = document.createElement('div');
    carouselItem2.setAttribute('class', 'carousel-item');
    bgImage2.setAttribute('class', 'd-block');
    const carouselCaption2 = document.createElement('div');
    carouselCaption2.setAttribute('class', 'carousel-caption');
    const carouselHeading2 = document.createElement('h1');
    carouselHeading2.setAttribute('class', 'display-3 text-light fw-bold');
    carouselHeading2.innerText = `Best Dishes Ever`;
    const carouselParagraph2 = document.createElement('p');
    carouselParagraph2.setAttribute('class', 'lead');
    carouselParagraph2.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

    // carousel item 3
    const carouselItem3 = document.createElement('div');
    carouselItem3.setAttribute('class', 'carousel-item');
    bgImage3.setAttribute('class', 'd-block');
    const carouselHeading3 = document.createElement('h1');
    const carouselCaption3 = document.createElement('div');
    carouselCaption3.setAttribute('class', 'carousel-caption');
    carouselHeading3.setAttribute('class', 'display-3 blur-2 text-warning fw-bold');
    carouselHeading3.innerText = `We have More Just For You!`;
    const carouselParagraph3 = document.createElement('p');
    carouselParagraph3.setAttribute('class', 'lead text-white text-center');
    carouselParagraph3.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;


    // append all elements
    carouselExampleCaptions.appendChild(carouselIndicators);
    carouselIndicators.appendChild(button1);
    carouselIndicators.appendChild(button2);
    carouselIndicators.appendChild(button3);
    carouselItem1.appendChild(bgImage);
    carouselItem1.appendChild(carouselCaption1);
    carouselCaption1.appendChild(carouselHeading1);
    carouselCaption1.appendChild(carouselParagraph1);
    carouselItem2.appendChild(bgImage2);
    carouselItem2.appendChild(carouselCaption2);
    carouselCaption2.appendChild(carouselHeading2);
    carouselCaption2.appendChild(carouselParagraph2);
    carouselItem3.appendChild(bgImage3);
    carouselItem3.appendChild(carouselCaption3);
    carouselCaption3.appendChild(carouselHeading3);
    carouselCaption3.appendChild(carouselParagraph3);
    carouselExampleCaptions.appendChild(carouselInner);
    carouselInner.appendChild(carouselItem1);
    carouselInner.appendChild(carouselItem2);
    carouselInner.appendChild(carouselItem3);
    content.appendChild(carouselExampleCaptions);

    // Initialize Bootstrap carousel
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        ride: 'carousel'
    });
};

const menuHTML = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'container py-100');
    const menuHeader = document.createElement('h1');
    menuHeader.setAttribute('class', 'text-center');
    menuHeader.innerText = `Our Menu`;
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class', 'menu-item');
    const menuItemH2 = document.createElement('h2');
    menuItemH2.textContent = 'Appetizers';
    const menuItemUl = document.createElement('ul');
    const menuItemLi1 = document.createElement('li');
    menuItemLi1.innerText = 'Chicken Wings';
    const menuItemLi2 = document.createElement('li');
    menuItemLi2.innerText = `French Fries`;
    const menuItemLi3 = document.createElement('li');
    menuItemLi3.innerText = `Spring Rolls`;
    const menuItemLi4 = document.createElement('li');
    menuItemLi4.innerText = `Nachos`;
    const menuItemLi5 = document.createElement('li');
    menuItemLi5.innerText = `Samosa`;

    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class', 'text-center dish-container');
    const mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('class', 'py-3');
    const mainDishHeader = document.createElement('h2');
    mainDishHeader.setAttribute('class', 'main-dish-header')
    mainDishHeader.innerText = `Main Dishes`;
    const mainDishGrid = document.createElement('div');
    mainDishGrid.setAttribute('class', 'grid-menu');

    // first dish item
    const mainDish1 = document.createElement('div');
    mainDish1.setAttribute('class', 'dishes');
    const mainDish1Image = document.createElement('img');
    mainDish1Image.setAttribute('src', afangImage.src);
    mainDish1Image.setAttribute('class', 'dishes-img');
    mainDish1Image.setAttribute('alt', 'Afang Soup');
    const mainDish1Body = document.createElement('div');
    mainDish1Body.setAttribute('class', 'dishes-body');
    const mainDish1BodyText = document.createElement('p');
    mainDish1BodyText.setAttribute('class', 'dishes-text')
    mainDish1BodyText.innerText = `Afang Soup`;

    // second dish item
    const mainDish2 = document.createElement('div');
    mainDish2.setAttribute('class', 'dishes');
    const mainDish2Image = document.createElement('img');
    mainDish2Image.setAttribute('src', bangaImage.src);
    mainDish2Image.setAttribute('class', 'dishes-img');
    mainDish2Image.setAttribute('alt', 'Banga Soup');
    const mainDish2Body = document.createElement('div');
    mainDish2Body.setAttribute('class', 'dishes-body');
    const mainDish2BodyText = document.createElement('p');
    mainDish2BodyText.setAttribute('class', 'dishes-text')
    mainDish2BodyText.innerText = `Banga Soup`;

    // third dish item
    const mainDish3 = document.createElement('div');
    mainDish3.setAttribute('class', 'dishes');
    const mainDish3Image = document.createElement('img');
    mainDish3Image.setAttribute('src', egusiImage.src);
    mainDish3Image.setAttribute('class', 'dishes-img');
    mainDish3Image.setAttribute('alt', 'Egusi Soup');
    const mainDish3Body = document.createElement('div');
    mainDish3Body.setAttribute('class', 'dishes-body');
    const mainDish3BodyText = document.createElement('p');
    mainDish3BodyText.setAttribute('class', 'dishes-text')
    mainDish3BodyText.innerText = `Egusi Soup`;

    // fourth dish item
    const mainDish4 = document.createElement('div');
    mainDish4.setAttribute('class', 'dishes');
    const mainDish4Image = document.createElement('img');
    mainDish4Image.setAttribute('src', riceImage.src);
    mainDish4Image.setAttribute('class', 'dishes-img');
    mainDish4Image.setAttribute('alt', 'Fried Rice');
    const mainDish4Body = document.createElement('div');
    mainDish4Body.setAttribute('class', 'dishes-body');
    const mainDish4BodyText = document.createElement('p');
    mainDish4BodyText.setAttribute('class', 'dishes-text')
    mainDish4BodyText.innerText = `Fried Rice`;

    // append all the elements to the DOM
    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuItem);
    menuItem.appendChild(menuItemH2);
    menuItem.appendChild(menuItemUl);
    menuItemUl.appendChild(menuItemLi1);
    menuItemUl.appendChild(menuItemLi2);
    menuItemUl.appendChild(menuItemLi3);
    menuItemUl.appendChild(menuItemLi4);
    menuItemUl.appendChild(menuItemLi5);
    mainContainer.appendChild(mainWrapper)

    mainWrapper.appendChild(mainDishHeader);
    mainWrapper.appendChild(mainDishGrid);
    mainContainer.appendChild(mainDishGrid);
    mainDishGrid.appendChild(mainDish1);
    mainDishGrid.appendChild(mainDish2);
    mainDishGrid.appendChild(mainDish3);
    mainDishGrid.appendChild(mainDish4);

    mainDish1.appendChild(mainDish1Image);
    mainDish1.appendChild(mainDish1Body);
    mainDish1Body.appendChild(mainDish1BodyText);

    mainDish2.appendChild(mainDish2Image);
    mainDish2.appendChild(mainDish2Body);
    mainDish2Body.appendChild(mainDish2BodyText);

    mainDish3.appendChild(mainDish3Image);
    mainDish3.appendChild(mainDish3Body);
    mainDish3Body.appendChild(mainDish3BodyText);

    mainDish4.appendChild(mainDish4Image);
    mainDish4.appendChild(mainDish4Body);
    mainDish4Body.appendChild(mainDish4BodyText);
    menuContainer.appendChild(mainContainer);
    content.appendChild(menuContainer);
   
};

const contactHTML = () => {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('class', 'container pt-100');
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('class', 'contact-grid');
    const intouch = document.createElement('div');
    intouch.setAttribute('class', 'd-grid display-1 fw-bold ch-8 py-4');
    intouch.style.gridArea = 'intouch';
    intouch.textContent = "Let's get in touch";
    const greetRelative = document.createElement('div');
    greetRelative.setAttribute('class', 'd-grid greet-relative');
    greetRelative.style.gridArea = 'greeting';
    const greeting = document.createElement('p');
    greeting.setAttribute('class', 'contact-greeting ch-35');
    greeting.textContent = `
                            Great! we're excited to hear from you and 
                            let's start something special together.
                            call us for any enquiry.`;

    const gridWave = document.createElement('div');
    gridWave.setAttribute('class', 'd-grid wave');
    gridWave.style.gridArea = 'hello';
    const wave = document.createElement('h4');
    wave.setAttribute('class', 'fw-bold ch-20');
    wave.textContent = "Don't be afraid to say hello to us!";
    // contact
    const contactSection = document.createElement('div');
    contactSection.setAttribute('class', 'd-grid');
    contactSection.style.gridArea = 'contact';
    // phone
    const phone = document.createElement('div');
    phone.setAttribute('class', 'd-flex flex-column font-sm');
    const phoneText = document.createElement('p');
    phoneText.setAttribute('class', 'lead');
    phoneText.textContent = 'Phone';
    const phoneNumber = document.createElement('p');
    phoneNumber.setAttribute('class', 'fw-bold');
    phoneNumber.textContent = '+234 701 600 7224';
    // email
    const email = document.createElement('div');
    email.setAttribute('class', 'd-flex flex-column font-sm');
    const emailText = document.createElement('p');
    emailText.setAttribute('class', 'lead');
    emailText.textContent = 'Email';
    const emailAddress = document.createElement('p');
    emailAddress.setAttribute('class', 'fw-bold');
    emailAddress.textContent = 'vtounaregha@gmail.com';
    // address
    const address = document.createElement('div');
    address.setAttribute('class', 'd-flex flex-column mb-5 font-sm');
    const addressText = document.createElement('p');
    addressText.setAttribute('class', 'lead');
    addressText.textContent = 'Address';
    const location = document.createElement('p');
    location.setAttribute('class', 'fw-bold');
    location.textContent = "Abuja, Nigeria";
    // form
    const formParent = document.createElement('div');
    formParent.setAttribute('class', 'contact-container-grid bg-dark px-4 pb-100');
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('class', 'contact-form');
    const h5 = document.createElement('h5');
    h5.setAttribute('class', 'text-white py-4 fw-bold');
    h5.textContent = 'Contact';
    // inputs for the form flex
    const input1 = document.createElement('div');
    input1.setAttribute('class', 'd-flex gap-3 text-white');
    // inputs for the form flex
    const input2 = document.createElement('div');
    input2.setAttribute('class', 'd-flex gap-3 py-3 text-white');
    // nameinput
    const nameContainer = document.createElement('div');
    nameContainer.setAttribute('class', 'd-flex col-6 col-md-6 flex-column');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'John Doe');
    nameInput.setAttribute('required', '');
    // emailcontainer
    const emailContainer = document.createElement('div');
    emailContainer.setAttribute('class', 'd-flex col-6 col-md-6 flex-column');
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'john@email.com');
    emailInput.setAttribute('required', '');
    // phonecontainer
    const phoneContainer = document.createElement('div');
    phoneContainer.setAttribute('class', 'd-flex col-6 col-md-6 flex-column');
    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.textContent = 'Phone Number';
    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'phone');
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('name', 'phone');
    phoneInput.setAttribute('placeholder', '08035627628');
    phoneInput.setAttribute('required', '');
    phoneInput.setAttribute('pattern', '[0-9]{10,15}');
    // subject
    const subjectContainer = document.createElement('div');
    subjectContainer.setAttribute('class', 'd-flex col-6 col-md-6 flex-column');
    const subjectLabel = document.createElement('label');
    subjectLabel.setAttribute('for', 'subject');
    subjectLabel.textContent = 'Subject';
    const subjectInput = document.createElement('input');
    subjectInput.setAttribute('type', 'text');
    subjectInput.setAttribute('id', 'subject');
    subjectInput.setAttribute('name', 'subject');
    // comment container
    const commentContainer = document.createElement('div');
    commentContainer.setAttribute('class', 'd-flex col-12 flex-column text-white');
    const commentLabel = document.createElement('label');
    commentLabel.setAttribute('for', 'comment');
    commentLabel.textContent = 'Tell us about your interest';
    const commentInput = document.createElement('textarea');
    commentInput.setAttribute('id', 'comment');
    commentInput.setAttribute('name', 'comment');
    commentInput.setAttribute('rows', '2');
    // button container
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'contact-button-grid');
    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-success btn-lg mt-3 px-5');
    button.setAttribute('type', 'submit');
    button.textContent = 'Send to us';

    // append all elements    
    content.appendChild(contactContainer);
    contactContainer.appendChild(contactDiv);
    contactDiv.appendChild(intouch);
    contactDiv.appendChild(greetRelative);
    greetRelative.appendChild(greeting);
    contactDiv.appendChild(gridWave);
    gridWave.appendChild(wave);
    contactDiv.appendChild(contactSection);
    contactSection.appendChild(phone);
    phone.appendChild(phoneText);
    phone.appendChild(phoneNumber);
    contactSection.appendChild(email);
    email.appendChild(emailText);
    email.appendChild(emailAddress);
    contactSection.appendChild(address);
    address.appendChild(addressText);
    address.appendChild(location);
    contactDiv.appendChild(formParent);
    formParent.appendChild(form);
    form.appendChild(h5);
    form.appendChild(input1);
    form.appendChild(input2);
    input1.appendChild(nameContainer);
    input1.appendChild(emailContainer);
    input2.appendChild(phoneContainer);
    input2.appendChild(subjectContainer);
    form.appendChild(commentContainer);
    form.appendChild(buttonContainer);
    
    
     buttonContainer.appendChild(button);
    commentContainer.appendChild(commentLabel);
    commentContainer.appendChild(commentInput);
    subjectContainer.appendChild(subjectLabel);
    subjectContainer.appendChild(subjectInput);
    phoneContainer.appendChild(phoneLabel);
    phoneContainer.appendChild(phoneInput);
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild( nameInput);

    const clearForm = () => {
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        subjectInput.value = '';
        commentInput.value = '';
    }
    // add eventlistener to submit
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        clearForm();
        alert('Message Sent Successfully');
    })
    
};

home.addEventListener('click', () => {
    content.textContent = '';
    navItems.forEach(item => item.classList.remove('active', 'border', 'border-start-0', 'border-success'));
    home.parentElement.classList.add('active', 'border', 'border-start-0', 'border-success');
    homeHTML();
});

menu.addEventListener('click', () => {
    content.textContent = '';
    navItems.forEach(item => item.classList.remove('active', 'border', 'border-start-0', 'border-success'));
    menu.parentElement.classList.add('active', 'border', 'border-start-0', 'border-success');
    menuHTML();
});

contact.addEventListener('click', () => {
    content.textContent = '';
    navItems.forEach(item => item.classList.remove('active', 'border', 'border-start-0', 'border-success'));
    contact.parentElement.classList.add('active', 'border', 'border-start-0', 'border-success');
    contactHTML();
});

homeHTML();