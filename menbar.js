document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.getElementById('botonMenu');
    const menuDesplegable = document.getElementById('menuDesplegable');

    if (botonMenu && menuDesplegable) {
        botonMenu.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el evento se propague
            menuDesplegable.classList.toggle('abierto');
        });

        // Cerrar el menú al hacer clic en un enlace
        const enlaces = menuDesplegable.querySelectorAll('a');
        enlaces.forEach(enlace => {
            enlace.addEventListener('click', function() {
                menuDesplegable.classList.remove('abierto');
            });
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = menuDesplegable.contains(event.target);
            const isClickOnButton = botonMenu.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnButton) {
                menuDesplegable.classList.remove('abierto');
            }
        });
    }
});