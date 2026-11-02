<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Galería | Bola Norte</title>

    <link rel="stylesheet" href="Galeria.css">
    <link rel="stylesheet" href="menbar.css">

</head>

<body>

    <?php include 'menbar.php'; ?>

    <main class="galeria-pagina">

        <section class="galeria-titulo">

            <h1>
                Galería
            </h1>

            <p>
                Explora imágenes y videos de la Liga Norte de México
            </p>

        </section>

        <section class="galeria">

            <div class="galeria-grid">

                <div class="imagen-card">
                    <img
                        src="GALERIA/MDE.jpg"
                        alt="Imagen de béisbol"
                        data-imagen
                    >
                </div>

                <div class="imagen-card">
                    <img
                        src="GALERIA/BDT.jpg"
                        alt="Imagen de béisbol"
                        data-imagen
                    >
                </div>

                <div class="imagen-card">
                    <img
                        src="GALERIA/BDLC.jpeg"
                        alt="Imagen de béisbol"
                        data-imagen
                    >
                </div>

                <div class="imagen-card">
                    <img
                        src="GALERIA/ADSL.jpg"
                        alt="Imagen de béisbol"
                        data-imagen
                    >
                </div>

                <div class="imagen-card">
                    <img
                        src="GALERIA/PP.jpg"
                        alt="Imagen de béisbol"
                        data-imagen
                    >
                </div>

                <div class="imagen-card">
                    <img
                        src="GALERIA/CDT.jpg"
                        alt="Imagen de béisbol"
                        data-imagen
                    >
                </div>

                <div class="imagen-card video-card">
                    <video src="GALERIA/video1.mp4" preload="metadata" muted playsinline data-video aria-label="Video de marineros"></video>
                    <span class="video-indicador">▶ Video Marineros</span>
                </div>

                <div class="imagen-card video-card">
                    <video src="GALERIA/video2.mp4" preload="metadata" muted playsinline data-video aria-label="Video de Algodoneros"></video>
                    <span class="video-indicador">▶ Video Algodoneros</span>
                </div>

                <div class="imagen-card video-card">
                    <video src="GALERIA/video3.mp4" preload="metadata" muted playsinline data-video aria-label="Marineros vs Tiburones"></video>
                    <span class="video-indicador">▶ Marineros vs Tiburones</span>
                </div>

            </div>

        </section>

    </main>


    <div class="editor" id="editor">

        <div class="editor-contenido">

            <button
                class="cerrar-editor"
                id="cerrarEditor"
            >
                ✕
            </button>

            <div class="imagen-editor">

                <img id="imagenGrande" src="" alt="Imagen seleccionada">
                <video id="videoGrande" controls playsinline preload="metadata" style="display: none;"></video>

            </div>

            <!-- FILTROS -->
            <div class="filtros">

                <h2>
                    Filtros
                </h2>

                <div class="filtros-grid">

                    <button
                        class="filtro-btn activo"
                        data-filtro="normal"
                    >
                        <span>Original</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="aberracion"
                    >
                        <span>Aberración</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="glitch"
                    >
                        <span>Glitch</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="neon"
                    >
                        <span>Neón</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="glow"
                    >
                        <span>Glow</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="cyber"
                    >
                        <span>Cyber</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="desenfoque"
                    >
                        <span>Desenfoque</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="calido"
                    >
                        <span>Cálido</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="frio"
                    >
                        <span>Frío</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="intenso"
                    >
                        <span>Intenso</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="oscuro"
                    >
                        <span>Oscuro</span>
                    </button>

                    <button
                        class="filtro-btn"
                        data-filtro="retro"
                    >
                        <span>Retro</span>
                    </button>

                </div>
            </div>
        </div>
    </div>

    <script src="Galeria.js"></script>

</body>

</html>