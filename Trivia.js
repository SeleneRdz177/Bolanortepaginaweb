document.addEventListener('DOMContentLoaded', function () {

    const preguntas = [

        {
            pregunta: "¿En qué año inició originalmente la Liga Norte de México?",
            respuestas: [
                "1958",
                "1968",
                "1978",
                "1988"
            ],
            correcta: 1
        },

        {
            pregunta: "¿En qué estados se ha desarrollado principalmente la Liga Norte de México?",
            respuestas: [
                "Sonora, Baja California y Baja California Sur",
                "Nuevo León, Coahuila y Tamaulipas",
                "Jalisco, Nayarit y Colima",
                "Sinaloa, Durango y Zacatecas"
            ],
            correcta: 0
        },

        {
            pregunta: "¿Cuál es el deporte en el que compiten los equipos de la Liga Norte de México?",
            respuestas: [
                "Fútbol",
                "Básquetbol",
                "Béisbol",
                "Softbol"
            ],
            correcta: 2
        },

        {
            pregunta: "¿Cuál de estas ciudades ha contado con un equipo de la Liga Norte de México?",
            respuestas: [
                "Puerto Peñasco",
                "Monterrey",
                "Puebla",
                "Mérida"
            ],
            correcta: 0
        },

        {
            pregunta: "¿Qué equipo representa a San Luis Río Colorado en la Liga Norte de México?",
            respuestas: [
                "Tiburones",
                "Algodoneros",
                "Marineros",
                "Bucaneros"
            ],
            correcta: 1
        },

        {
            pregunta: "¿Qué equipo de la Liga Norte de México tiene como sede Puerto Peñasco?",
            respuestas: [
                "Tiburones",
                "Huracanes",
                "Vaqueros",
                "Algodoneros"
            ],
            correcta: 0
        },

        {
            pregunta: "¿Qué equipo representa a La Paz, Baja California Sur?",
            respuestas: [
                "Bucaneros",
                "Delfines",
                "Huracanes",
                "Marineros"
            ],
            correcta: 2
        },

        {
            pregunta: "¿Qué equipo de la LNM representa a Los Cabos?",
            respuestas: [
                "Bucaneros",
                "Tiburones",
                "Algodoneros",
                "Vaqueros"
            ],
            correcta: 0
        },

        {
            pregunta: "¿Qué equipo representa a Ensenada en la actividad de la LNM en 2026?",
            respuestas: [
                "Marineros",
                "Huracanes",
                "Tiburones",
                "Bucaneros"
            ],
            correcta: 0
        },

        {
            pregunta: "¿Qué equipo representa a Tijuana en la Liga Norte de México en 2026?",
            respuestas: [
                "Barbanegras",
                "Marineros",
                "Vaqueros",
                "Algodoneros"
            ],
            correcta: 0
        }

    ];


    /* ========================================
       ELEMENTOS HTML
    ======================================== */

    const pantallaInicio =
        document.getElementById('pantallaInicio');

    const pantallaTrivia =
        document.getElementById('pantallaTrivia');

    const pantallaResultado =
        document.getElementById('pantallaResultado');

    const btnComenzar =
        document.getElementById('btnComenzar');

    const btnSiguiente =
        document.getElementById('btnSiguiente');

    const btnReiniciar =
        document.getElementById('btnReiniciar');

    const numeroPregunta =
        document.getElementById('numeroPregunta');

    const marcador =
        document.getElementById('marcador');

    const pregunta =
        document.getElementById('pregunta');

    const respuestas =
        document.getElementById('respuestas');

    const barraProgreso =
        document.getElementById('barraProgreso');

    const puntuacionFinal =
        document.getElementById('puntuacionFinal');

    const mensajeFinal =
        document.getElementById('mensajeFinal');


    /* ========================================
       VARIABLES DEL JUEGO
    ======================================== */

    let preguntaActual = 0;
    let puntuacion = 0;
    let respuestaSeleccionada = false;


    /* ========================================
       COMENZAR TRIVIA
    ======================================== */

    btnComenzar.addEventListener('click', function () {

        preguntaActual = 0;
        puntuacion = 0;

        pantallaInicio.style.display = 'none';
        pantallaResultado.style.display = 'none';
        pantallaTrivia.style.display = 'block';

        mostrarPregunta();

    });


    /* ========================================
       MOSTRAR PREGUNTA
    ======================================== */

    function mostrarPregunta() {

        respuestaSeleccionada = false;

        btnSiguiente.disabled = true;

        const preguntaData = preguntas[preguntaActual];

        numeroPregunta.textContent =
            `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;

        marcador.textContent =
            `Puntos: ${puntuacion}`;

        pregunta.textContent =
            preguntaData.pregunta;

        respuestas.innerHTML = '';


        /* Barra de progreso */

        const progreso =
            ((preguntaActual) / preguntas.length) * 100;

        barraProgreso.style.width =
            `${progreso}%`;


        /* Crear respuestas */

        preguntaData.respuestas.forEach(function (respuesta, index) {

            const boton =
                document.createElement('button');

            boton.classList.add('respuesta');

            boton.textContent =
                respuesta;

            boton.addEventListener('click', function () {

                seleccionarRespuesta(index, boton);

            });

            respuestas.appendChild(boton);

        });

    }


    /* ========================================
       SELECCIONAR RESPUESTA
    ======================================== */

    function seleccionarRespuesta(index, botonSeleccionado) {

        if (respuestaSeleccionada) {
            return;
        }

        respuestaSeleccionada = true;

        const preguntaData =
            preguntas[preguntaActual];

        const botones =
            respuestas.querySelectorAll('.respuesta');


        /* Desactivar todas las respuestas */

        botones.forEach(function (boton) {

            boton.style.cursor = 'default';

        });


        /* Respuesta correcta */

        if (index === preguntaData.correcta) {

            botonSeleccionado.classList.add('correcta');

            puntuacion++;

        } else {

            botonSeleccionado.classList.add('incorrecta');

            botones[preguntaData.correcta]
                .classList.add('correcta');

        }


        marcador.textContent =
            `Puntos: ${puntuacion}`;

        btnSiguiente.disabled = false;

    }


    /* ========================================
       SIGUIENTE PREGUNTA
    ======================================== */

    btnSiguiente.addEventListener('click', function () {

        preguntaActual++;

        if (preguntaActual >= preguntas.length) {

            mostrarResultado();

        } else {

            mostrarPregunta();

        }

    });


    /* ========================================
       RESULTADO
    ======================================== */

    function mostrarResultado() {

        pantallaTrivia.style.display = 'none';
        pantallaResultado.style.display = 'block';

        puntuacionFinal.textContent =
            `${puntuacion} / ${preguntas.length}`;


        let mensaje = '';

        if (puntuacion === 10) {

            mensaje =
                '¡Perfecto! Conoces muy bien la Liga Norte de México. ⚾';

        } else if (puntuacion >= 8) {

            mensaje =
                '¡Excelente! Tienes muy buenos conocimientos de la LNM.';

        } else if (puntuacion >= 6) {

            mensaje =
                '¡Buen trabajo! Conoces bastante sobre la liga.';

        } else if (puntuacion >= 4) {

            mensaje =
                'Nada mal. Hay algunos datos que todavía puedes descubrir.';

        } else {

            mensaje =
                'Hay que seguirle el paso al béisbol. ¡Inténtalo otra vez!';

        }

        mensajeFinal.textContent = mensaje;

    }


    /* ========================================
       REINICIAR
    ======================================== */

    btnReiniciar.addEventListener('click', function () {

        puntuacion = 0;
        preguntaActual = 0;

        pantallaResultado.style.display = 'none';
        pantallaInicio.style.display = 'block';

    });

});