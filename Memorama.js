const equipos = [
    { id: 1, nombre: 'Algodoneros', src: 'LOGOS/ASL.png', color: '#1a5276' },
    { id: 2, nombre: 'Bucaneros', src: 'LOGOS/BLC.png', color: '#1a5276' },
    { id: 3, nombre: 'Barbanegras', src: 'LOGOS/BNTJ.png', color: '#1a5276' },
    { id: 4, nombre: 'Cerveceros', src: 'LOGOS/CTKT.png', color: '#1a5276' }
];

let cartas = [];
let cartaVolteada = null;
let bloqueo = false;
let intentos = 0;
let parejasEncontradas = 0;
let temporizador = null;
let segundos = 0;

function iniciarJuego() {
    // Duplicar equipos para crear pares
    cartas = [...equipos, ...equipos].map((equipo, index) => ({
        ...equipo,
        idUnico: index
    }));
    
    // Mezclar cartas
    cartas = shuffle(cartas);
    
    // Generar tablero
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = '';
    
    cartas.forEach((carta, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        tarjeta.dataset.id = carta.id;
        tarjeta.dataset.idUnico = carta.idUnico;
        
        // Usar carta.src para la imagen
        tarjeta.innerHTML = `
            <div class="tarjeta-inner">
                <div class="tarjeta-front">
                    <span class="simbolo">?</span>
                </div>
                <div class="tarjeta-back" style="background-color: ${carta.color}">
                    <div class="logo-container">
                        <img src="${carta.src}" alt="${carta.nombre}" class="logo-imagen">
                        <span class="equipo-nombre">${carta.nombre}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Manejar error de carga de imagen
        const img = tarjeta.querySelector('.logo-imagen');
        img.onerror = function() {
            console.log('Error cargando imagen:', carta.src);
            this.style.display = 'none';
            const nombreSpan = this.nextElementSibling;
            nombreSpan.style.fontSize = '1.5rem';
            nombreSpan.style.color = '#2c3e50';
        };
        
        tarjeta.addEventListener('click', () => voltearCarta(tarjeta));
        tablero.appendChild(tarjeta);
    });
    
    // Reiniciar variables
    intentos = 0;
    parejasEncontradas = 0;
    segundos = 0;
    cartaVolteada = null;
    bloqueo = false;
    
    // Actualizar marcador
    actualizarMarcador();
    
    // Iniciar temporizador
    clearInterval(temporizador);
    temporizador = setInterval(actualizarTiempo, 1000);
}

// Función para mezclar array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Voltear carta
function voltearCarta(tarjeta) {
    if (bloqueo || tarjeta.classList.contains('volteada')) {
        return;
    }
    
    tarjeta.classList.add('volteada');
    
    if (!cartaVolteada) {
        cartaVolteada = tarjeta;
        return;
    }
    
    // Segunda carta
    if (cartaVolteada.dataset.id === tarjeta.dataset.id) {
        // Pareja encontrada
        parejasEncontradas++;
        actualizarMarcador();
        
        // Efecto de éxito
        setTimeout(() => {
            tarjeta.classList.add('encontrada');
            cartaVolteada.classList.add('encontrada');
            cartaVolteada = null;
            
            if (parejasEncontradas === equipos.length) {
                gameOver();
            }
        }, 500);
    } else {
        // No es pareja
        bloqueo = true;
        intentos++;
        actualizarMarcador();
        
        setTimeout(() => {
            tarjeta.classList.remove('volteada');
            cartaVolteada.classList.remove('volteada');
            cartaVolteada = null;
            bloqueo = false;
        }, 1000);
    }
}

// Actualizar marcador
function actualizarMarcador() {
    document.getElementById('intentos').textContent = intentos;
    document.getElementById('parejas').textContent = parejasEncontradas;
}

// Actualizar tiempo
function actualizarTiempo() {
    segundos++;
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;
    document.getElementById('tiempo').textContent = 
        `${minutos.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

// Fin del juego
function gameOver() {
    clearInterval(temporizador);
    
    setTimeout(() => {
        const mensaje = `¡Felicidades!\n\nCompletaste el memorama en:\n• ${intentos} intentos\n• ${segundos} segundos`;
        alert(mensaje);
    }, 500);
}

// Reiniciar juego
function reiniciarJuego() {
    iniciarJuego();
}

document.addEventListener('DOMContentLoaded', iniciarJuego);