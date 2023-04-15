const buttonWA = document.getElementById('details-button-WA');
const elementsWA = document.querySelectorAll('.vissible-list-WA, .hidden-list-WA');
let isExpandedWA = false; // Variable de estado

buttonWA.addEventListener('click', () => {
    elementsWA.forEach((element) => {
        element.classList.toggle('vissible-list-WA');
        element.classList.toggle('hidden-list-WA');
    });

    // Actualiza el texto del botón y la variable de estado
    if (isExpandedWA) {
        buttonWA.textContent = 'More details';
        isExpandedWA = false;
    } else {
        buttonWA.textContent = 'Less details';
        isExpandedWA = true;
    }
});

const buttonWOA = document.getElementById('details-button-WOA');
const elementsWOA = document.querySelectorAll('.vissible-list-WOA, .hidden-list-WOA');
let isExpandedWOA = false; // Variable de estado

buttonWOA.addEventListener('click', () => {
    elementsWOA.forEach((element) => {
        element.classList.toggle('vissible-list-WOA');
        element.classList.toggle('hidden-list-WOA');
    });

    // Actualiza el texto del botón y la variable de estado
    if (isExpandedWOA) {
        buttonWOA.textContent = 'More details';
        isExpandedWOA = false;
    } else {
        buttonWOA.textContent = 'Less details';
        isExpandedWOA = true;
    }
});
