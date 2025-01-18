document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar los clics en los botones de acción
    const actionButtons = document.querySelectorAll('.image-actions button');

    actionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.getAttribute('title');
            alert(`Acción seleccionada: ${action}`);
        });
    });

    // Actualización del pie de página
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});