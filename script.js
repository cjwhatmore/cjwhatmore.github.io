// The site works without JavaScript.
// This updates the copyright year in the footer.

const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}