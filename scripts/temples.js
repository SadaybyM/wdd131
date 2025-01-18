document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar los clics en los botones de acción
    const actionButtons = document.querySelectorAll('.image-actions button');

    actionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.getAttribute('data-action');
            switch (action) {
                case 'view':
                    alert('Ver imagen seleccionada.');
                    break;
                case 'download':
                    alert('Descargar imagen seleccionada.');
                    break;
                case 'share':
                    alert('Compartir imagen seleccionada.');
                    break;
                default:
                    alert('Acción desconocida.');
            }
        });
    });

    // Función para agregar las acciones dinámicamente a las imágenes
    const figures = document.querySelectorAll('figure');
    figures.forEach(figure => {
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('image-actions');

        const viewButton = createActionButton('👁️', 'Ver', 'view');
        const downloadButton = createActionButton('⬇️', 'Descargar', 'download');
        const shareButton = createActionButton('🔗', 'Compartir', 'share');

        actionsContainer.appendChild(viewButton);
        actionsContainer.appendChild(downloadButton);
        actionsContainer.appendChild(shareButton);

        figure.appendChild(actionsContainer);
    });

    // Helper para crear botones de acción
    function createActionButton(icon, title, action) {
        const button = document.createElement('button');
        button.innerHTML = icon;
        button.setAttribute('title', title);
        button.setAttribute('data-action', action);
        return button;
    }

    // Actualización del pie de página
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});