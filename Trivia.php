<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Trivia | Bola Norte</title>

    <!-- CSS de la página -->
    <link rel="stylesheet" href="Trivia.css">

    <!-- CSS del menú -->
    <link rel="stylesheet" href="menbar.css">
</head>

<body>

    <!-- Menú reutilizable -->
    <?php include 'menbar.php'; ?>


    <main class="trivia-container">

        <!-- Pantalla de inicio -->
        <section class="trivia-inicio" id="pantallaInicio">

            <div class="trivia-card">

                <div class="trivia-icono">
                    ⚾
                </div>

                <h1>Trivia de Béisbol</h1>

                <h2>Liga Norte de México</h2>

                <p>
                    ¿Qué tanto sabes sobre el béisbol de la
                    Liga Norte de México?
                </p>

                <p class="descripcion">
                    Pon a prueba tus conocimientos con
                    10 preguntas.
                </p>

                <button class="btn-comenzar" id="btnComenzar">
                    Comenzar Trivia
                </button>

            </div>

        </section>


        <!-- Trivia -->
        <section class="trivia-juego" id="pantallaTrivia">

            <div class="trivia-card">

                <!-- Parte superior -->
                <div class="trivia-header">

                    <span id="numeroPregunta">
                        Pregunta 1 de 10
                    </span>

                    <span id="marcador">
                        Puntos: 0
                    </span>

                </div>


                <!-- Barra de progreso -->
                <div class="progreso-container">

                    <div 
                        class="progreso" 
                        id="barraProgreso">
                    </div>

                </div>


                <!-- Pregunta -->
                <div class="pregunta-container">

                    <h2 id="pregunta">
                        Pregunta
                    </h2>

                </div>


                <!-- Respuestas -->
                <div 
                    class="respuestas" 
                    id="respuestas">
                </div>


                <!-- Botón siguiente -->
                <button 
                    class="btn-siguiente" 
                    id="btnSiguiente"
                    disabled>
                    Siguiente
                </button>

            </div>

        </section>


        <!-- Resultado -->
        <section class="trivia-resultado" id="pantallaResultado">

            <div class="trivia-card">

                <div class="resultado-icono">
                    🏆
                </div>

                <h1>¡Trivia terminada!</h1>

                <p class="resultado-texto">
                    Tu puntuación fue:
                </p>

                <div 
                    class="puntuacion-final" 
                    id="puntuacionFinal">
                    0 / 10
                </div>

                <p 
                    class="mensaje-final" 
                    id="mensajeFinal">
                </p>

                <button 
                    class="btn-reiniciar" 
                    id="btnReiniciar">
                    Jugar de nuevo
                </button>

            </div>

        </section>

    </main>


    <script src="Trivia.js"></script>

</body>

</html>