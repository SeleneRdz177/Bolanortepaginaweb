document.addEventListener('DOMContentLoaded', function() {
    // ===== CONFIGURACIÓN DEL CARRUSEL =====
    const carruselInner = document.getElementById('carruselInner');
    const items = carruselInner.querySelectorAll('.carrusel-item');
    const totalItems = items.length;
    let currentIndex = 0;
    let autoPlayInterval = null;
    const AUTO_PLAY_DELAY = 3000; // 3 segundos

    // Crear indicadores (puntos)
    const indicatorsContainer = document.getElementById('indicators');
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        dot.addEventListener('click', function() {
            goToSlide(parseInt(this.dataset.index));
        });
        indicatorsContainer.appendChild(dot);
    }

    // Función para ir a un slide específico
    function goToSlide(index) {
        if (index < 0) {
            index = totalItems - 1;
        } else if (index >= totalItems) {
            index = 0;
        }
        
        currentIndex = index;
        carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar indicadores
        const dots = indicatorsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Función para siguiente slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Función para anterior slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // ===== EVENTOS DE LOS BOTONES =====
    document.getElementById('btnNext').addEventListener('click', function() {
        nextSlide();
        resetAutoPlay();
    });

    document.getElementById('btnPrev').addEventListener('click', function() {
        prevSlide();
        resetAutoPlay();
    });

    // ===== AUTO-PLAY =====
    function startAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
        autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
    }

    function resetAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }
    }

    // Iniciar auto-play
    startAutoPlay();

    // ===== PAUSA AL PASAR EL MOUSE =====
    const carrusel = document.querySelector('.carrusel');
    carrusel.addEventListener('mouseenter', function() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    });

    carrusel.addEventListener('mouseleave', function() {
        startAutoPlay();
    });

    // ===== SOPORTE PARA TECLADO =====
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            nextSlide();
            resetAutoPlay();
        } else if (event.key === 'ArrowLeft') {
            prevSlide();
            resetAutoPlay();
        }
    });

    // ===== TOUCH SUPPORT PARA MÓVILES =====
    let touchStartX = 0;
    let touchEndX = 0;

    carrusel.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    carrusel.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > 50) { // Mínimo 50px para considerar swipe
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoPlay();
        }
    });

    // ===== BOTON PARA MOSTRAR EN CELULAR LOS EQUIPOS =====
    const botonEquipos = document.getElementById("botonEquipos");
    const equipos = document.getElementById("equipos");

    botonEquipos.addEventListener("click", function () {

        equipos.classList.toggle("abierto");

        botonEquipos.classList.toggle("abierto");

        if (equipos.classList.contains("abierto")) {

            botonEquipos.textContent = "❯";

        } else {
            
            botonEquipos.textContent = "❮";

        }

    });

});