const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Última Modificación: ${document.lastModified}`;