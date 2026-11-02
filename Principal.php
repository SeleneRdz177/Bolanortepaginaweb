<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bola Norte</title>

    <link rel="stylesheet" href="Principal.css">
    <link rel="stylesheet" href="menbar.css">
</head>

<body>

    <?php include 'menbar.php'; ?>

    <main class="contenido">

        <div class="pagina-principal">

            <section class="contenido-principal">

                <!-- CARRUSEL -->
                <div class="galeria-container">

                    <div class="carrusel">

                        <div class="carrusel-inner" id="carruselInner">

                            <div class="carrusel-item">
                                <img 
                                    src="IMAGENES/HistoriaLMN.jpg" 
                                    alt="Historia de la Liga Norte de México">
                            </div>

                            <div class="carrusel-item">
                                <img 
                                    src="IMAGENES/Principal2.png" 
                                    alt="Béisbol de la Liga Norte de México">
                            </div>

                            <div class="carrusel-item">
                                <img 
                                    src="IMAGENES/Principal3.png" 
                                    alt="Liga Norte de México">
                            </div>

                        </div>

                        <button 
                            class="carrusel-btn carrusel-btn-prev" 
                            id="btnPrev">
                            ❮
                        </button>

                        <button 
                            class="carrusel-btn carrusel-btn-next" 
                            id="btnNext">
                            ❯
                        </button>

                        <div 
                            class="carrusel-indicators" 
                            id="indicators">
                        </div>

                    </div>

                </div>

                <!-- HISTORIA -->
                <article class="historia">

                    <h1>
                        Historia de la Liga Norte de México
                    </h1>

                    <p>
                        La Liga Norte de México es una de las competencias
                        de béisbol que forman parte de la historia de la
                        pelota profesional en el noroeste del país.
                    </p>

                    <p>
                        Sus primeros antecedentes se remontan a 1968,
                        cuando comenzó una etapa que contó con equipos
                        de diferentes ciudades de Baja California y Sonora.
                        En aquella época participaron clubes como los
                        Águilas de Mexicali, Tigres de Ensenada,
                        Rieleros de Empalme, Algodoneros de San Luis
                        e Internacionales de Nogales.
                    </p>

                    <p>
                        Durante sus primeras temporadas, la liga sirvió
                        como un espacio importante para el desarrollo de
                        jóvenes jugadores que posteriormente buscarían
                        avanzar hacia niveles superiores del béisbol
                        mexicano.
                    </p>

                    <p>
                        Después de diferentes etapas y cambios en su
                        organización, la liga retomó actividades en años
                        posteriores y llegó a establecer vínculos con
                        organizaciones de la Liga Mexicana de Béisbol.
                        Estos acuerdos permitieron que jóvenes prospectos
                        tuvieran la oportunidad de adquirir experiencia
                        y mantenerse activos durante su desarrollo.
                    </p>

                    <p>
                        La competencia se ha desarrollado principalmente
                        en los estados de Baja California,
                        Baja California Sur y Sonora, convirtiéndose en
                        un circuito representativo del béisbol del
                        noroeste de México.
                    </p>

                    <p>
                        Después de varios años con interrupciones en su
                        actividad, la Liga Norte de México regresó a los
                        diamantes en 2026. La nueva etapa comenzó con
                        siete equipos anunciados, aunque durante la
                        temporada se produjeron cambios en algunas
                        organizaciones.
                    </p>

                    <p>
                        Actualmente, la liga continúa representando una
                        plataforma para el desarrollo de jugadores y una
                        parte importante de la tradición beisbolera del
                        norte del país.
                    </p>

                </article>

            </section>

            <button class="boton-equipos" id="botonEquipos">
             ❮
            </button>

            <aside class="equipos" id="equipos">

                <h2>
                    Equipos LNM
                </h2>
                <p class="equipos-subtitulo">
                    Temporada 2026
                </p>

                <a href="Equipo.php?equipo=marineros" class="equipo-card">
                    <div class="equipo-logo">
                        <img src="LOGOS/MENS.png" alt="Logo Marinero de Ensenada">
                    </div>

                    <div class="equipo-info">
                        <h3>Marineros</h3>
                        <span>Ensenada, B.C.</span>
                    </div>
                </a>

                <a href="Equipo.php?equipo=barbanegras" class="equipo-card">
                    <div class="equipo-logo">
                        <img src="LOGOS/BNTJ.png" alt="Logo Barbanegras ded Tijuana">
                    </div>

                    <div class="equipo-info">
                        <h3>Barbanegras</h3>
                        <span>Tijuana, B.C.</span>
                    </div>
                </a>

                <a href="Equipo.php?equipo=bucaneros" class="equipo-card">
                    <div class="equipo-logo">
                        <img src="LOGOS/BLC.png" alt="Logo Bucaneros de Los Cabos">
                    </div>

                    <div class="equipo-info">
                        <h3>Bucaneros</h3>
                        <span>Los Cabos, B.C.S.</span>
                    </div>
                </a>

                <a href="Equipo.php?equipo=algodoneros" class="equipo-card">
                    <div class="equipo-logo">
                        <img src="LOGOS/ASL.png" alt="Logo Algodoneros de San Luis">
                    </div>

                    <div class="equipo-info">
                        <h3>Algodoneros</h3>
                        <span>San Luis Río Colorado</span>
                    </div>
                </a>

                <a href="Equipo.php?equipo=tiburones" class="equipo-card">
                    <div class="equipo-logo">
                        <img src="LOGOS/TPPS.png" alt="Logo Tiburones de Puerto Peñasco Sonora">
                    </div>

                    <div class="equipo-info">
                        <h3>Tiburones</h3>
                        <span>Puerto Peñasco, Son.</span>
                    </div>
                </a>

                <a href="Equipo.php?equipo=cerveceros" class="equipo-card">
                    <div class="equipo-logo">
                        <img src="LOGOS/CTKT.png" alt="Logo Cerveceros de TKT">
                    </div>

                    <div class="equipo-info">
                        <h3>Cerveceros</h3>
                        <span>Tecate, B.C.</span>
                    </div>
                </a>

            </aside>

        </div>

    </main>

    <script src="Principal.js"></script>

</body>

</html>