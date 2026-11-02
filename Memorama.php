<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bola Norte</title>

    <link rel="stylesheet" href="Memorama.css">
    <link rel="stylesheet" href="menbar.css">
</head>

<body>

    <?php include 'menbar.php'; ?>

    <div class="memorama-container">
        <h1>Memorama </h1>
        <p class="instrucciones">Encuentra las imagenes que coincidan</p>
        
        <div class="puntuacion">
            <span>Intentos: <strong id="intentos">0</strong></span>
            <span>Parejas: <strong id="parejas">0</strong>/4</span>
            <span>Tiempo: <strong id="tiempo">00:00</strong></span>
        </div>

        <div class="tablero" id="tablero">

        </div>

        <button onclick="reiniciarJuego()" class="btn-reiniciar">Reiniciar Juego</button>
    </div>

    <script src="Memorama.js"></script>

</body>
</html>