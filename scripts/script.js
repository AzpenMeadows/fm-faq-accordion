const faqOne = document.querySelector("#js-faq-1");
const faqTwo = document.querySelector("#js-faq-2");
const faqThree = document.querySelector("#js-faq-3");
const faqFour = document.querySelector("#js-faq-4");

const btnOne = document.querySelector("#js-btn-1");
const btnTwo = document.querySelector("#js-btn-2");
const btnThree = document.querySelector("#js-btn-3");
const btnFour = document.querySelector("#js-btn-4");

let faqActive = btnOne;


btnOne.addEventListener('click', () => {
    faqActive = faqOne;
    faqToggle();
});

btnTwo.addEventListener('click', () => {
    faqActive = faqTwo;
    faqToggle();
});

btnThree.addEventListener('click', () => {
    faqActive = faqThree;
    faqToggle();
});

btnFour.addEventListener('click', () => {
    faqActive = faqFour;
    faqToggle();
});

function faqToggle () {
    faqActive.classList.toggle("open");
};